"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  { name: "Linkedin", url: "#", color: "hover:text-blue-600" },
  { name: "Instagram", url: "#", color: "hover:text-pink-600" },
  { name: "Twitter", url: "#", color: "hover:text-blue-400" },
];

export default function Hero() {
  return (
    <section className="layout-section relative min-h-screen flex items-center">
      <div className="layout-container">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Text */}
            <div className="w-full text-center lg:text-left space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg sm:text-xl text-pink-600 font-medium">
                  Halo, Saya
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-purple-800 font-display mt-2">
                  Natasya Artameivia
                </h1>
                <p className="text-lg sm:text-xl text-pink-700 font-light mt-3">
                  Communication & Public Relations Specialist
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                Membantu perusahaan dan organisasi dalam membangun citra positif
                dan hubungan yang kuat dengan stakeholders melalui strategi
                komunikasi yang efektif.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <a href="#about" className="button-primary w-full sm:w-auto">
                  Tentang Saya
                </a>
                <a
                  href="#contact"
                  className="button-secondary w-full sm:w-auto"
                >
                  Hubungi Saya
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-6"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm sm:text-base text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    {social.name}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full animate-fade-in-up">
              {/* Main Image Container */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] mx-auto lg:mr-0">
                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-pink-200/30 animate-spin-slow" />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-purple-200/20 animate-spin-reverse" />

                {/* Main frame */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative bg-gradient-to-br from-white/80 to-pink-500/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 pb-16 shadow-xl border border-pink-100"
                >
                  {/* Image container */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-purple-100/20 mix-blend-overlay z-10" />
                    <Image
                      src="/a.jpeg"
                      alt="Natasya Artameivia"
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                      className="rounded-xl"
                    />
                  </div>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -bottom-0 right-6"
                  >
                    <div className="typing-animation-signature">
                      <span className="font-dancing text-xl sm:text-2xl text-pink-600">
                        Natasyaz
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-sm text-pink-600 font-medium">Scroll Down</span>
        <ChevronDownIcon className="w-6 h-6 text-pink-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
