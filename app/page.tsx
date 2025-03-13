"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Navbar from "./components/Navbar";

// Gunakan dynamic import untuk komponen yang menggunakan window
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

// TimelineCircle component
const TimelineCircle = ({ isActive = false }) => {
  return (
    <figure className="absolute -left-[63px] top-0 flex items-center">
      <svg className="-rotate-90" width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          className={`fill-white transition-all duration-500 ${
            isActive ? "stroke-pink-400" : "stroke-pink-200"
          } stroke-[1.5px]`}
        />
        <circle
          cx="20"
          cy="20"
          r="12"
          className={`transition-all duration-500 ${
            isActive ? "fill-pink-400" : "fill-pink-200"
          }`}
          style={{
            filter: isActive
              ? "drop-shadow(0 0 4px rgba(244, 114, 182, 0.4))"
              : "none",
          }}
        />
      </svg>
    </figure>
  );
};

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <footer className="py-8 sm:py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 text-pink-600">
            <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-base sm:text-lg">
              Made with love by{" "}
              <a
                href="https://alkindivv.site"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-pink-700 transition-colors duration-300"
              >
                AL KINDI
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
