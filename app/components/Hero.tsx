"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/natyeu",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/natasya-artameivia",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/natyeu",
    icon: FaTwitter,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-0 flex flex-col justify-between overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-pink-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="layout-container flex-grow relative z-10 px-4 sm:px-6 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center my-auto">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold leading-tight"
            >
              <span className="text-gray-700 text-xl sm:text-2xl font-medium">
                Hello, I&apos;m{" "}
              </span>{" "}
              <span className="font-bold block mt-1 sm:mt-1 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-[2.25rem] sm:text-[2.7rem] max-w-[1000px] mx-auto lg:mx-0">
                Natasya Artameivia
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 sm:mt-4"
            >
              <h2 className="text-base sm:text-xl  text-gray-600 font-medium">
                Communication & Public Relations Specialist
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
            >
              Membangun hubungan yang kuat dan strategi komunikasi yang efektif
              untuk membantu organisasi mencapai tujuannya.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 flex flex-row sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Resume
              </Link>
              <Link
                href="#about"
                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-pink-200 text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                About Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 sm:mt-8 flex items-center justify-start lg:justify-start gap-4"
            >
              <span className="text-xs sm:text-sm text-gray-500">
                Follow me:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white border border-pink-100 text-gray-600 hover:text-pink-600 hover:border-pink-300 hover:shadow-md transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pr-18"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 backdrop-blur-sm"
              ></motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-4 sm:inset-6 overflow-hidden rounded-full border-2 border-white shadow-xl"
              >
                <Image
                  src="/nat.jpeg"
                  alt="Natasya Artameivia"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Decorative small circles */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-5 -left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 shadow-lg"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-10 -right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 shadow-lg"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute -bottom-2 left-1/3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <Link
        href="#about"
        className="flex flex-col items-center mb-12 cursor-pointer group"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm sm:text-base text-gray-500 group-hover:text-pink-600 transition-all duration-300 mb-2">
            Scroll Down
          </span>
          <motion.div
            animate={{
              y: [-2, 2, -2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HiArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" />
          </motion.div>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
