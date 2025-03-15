"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    // { name: "Beranda", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b-4 border-pink-600/30"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16 sm:h-20">
          {/* <motion.a
            href="#"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Natasya
          </motion.a> */}

          {/* Desktop Menu */}
          <div className="hidden justify-end md:flex items-center space-x-4 lg:space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-gray-600 hover:text-pink-600 transition-colors px-2 py-1 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-600 focus:outline-none p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
              <span
                className={`block h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full transition-all duration-300 ${
                  isOpen ? "w-6 transform rotate-45 translate-y-2" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full transition-all duration-300 ${
                  isOpen ? "w-0 opacity-0" : "w-4"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full transition-all duration-300 ${
                  isOpen ? "w-6 transform -rotate-45 -translate-y-2" : "w-5"
                }`}
              ></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginBottom: isOpen ? "1rem" : "0",
          }}
          className="md:hidden overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
        >
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors px-4 py-3 border-b border-pink-50 last:border-b-0"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
