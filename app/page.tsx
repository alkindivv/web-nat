"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

// Gunakan dynamic import untuk komponen Hero
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-t-pink-600 border-r-purple-600 border-b-pink-600 border-l-purple-600 border-t-transparent animate-spin"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
