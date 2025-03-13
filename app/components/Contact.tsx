"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
    // Reset form
    setFormState({ name: "", email: "", message: "" });
    // Show success message
    alert("Pesan Anda telah terkirim. Terima kasih!");
  };

  return (
    <section
      id="contact"
      className="layout-section py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Decorative Elements - Adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-100/10 to-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="layout-container relative z-10 px-4 sm:px-6">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Hubungi Saya
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-pink-100">
              <div className="grid md:grid-cols-2">
                {/* Contact Info - Optimized for mobile */}
                <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 sm:p-8 md:p-10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full -translate-x-10 -translate-y-20 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full translate-x-10 translate-y-20 blur-2xl"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10 space-y-6 sm:space-y-8"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        Mari Terhubung
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        Jangan ragu untuk menghubungi saya untuk kolaborasi atau
                        sekadar berbincang.
                      </p>
                    </div>

                    <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-white/70">
                            Email
                          </p>
                          <a
                            href="mailto:natasyaartameivia@gmail.com"
                            className="text-sm sm:text-base text-white hover:text-pink-200 transition-colors break-all"
                          >
                            natasyaartameivia@gmail.com
                          </a>
                        </div>
                      </motion.div>

                      {/* Location */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-white/70">
                            Lokasi
                          </p>
                          <p className="text-sm sm:text-base text-white">
                            Batam, Indonesia
                          </p>
                        </div>
                      </motion.div>

                      {/* Phone - Optional */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-white/70">
                            Telepon
                          </p>
                          <p className="text-sm sm:text-base text-white">
                            +62 812 3456 7890
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Social Links - Adjusted for mobile */}
                    <div className="pt-4 sm:pt-8">
                      <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                        Ikuti Saya
                      </p>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form - Optimized for mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 md:p-10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-6">
                    Kirim Pesan
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base"
                    >
                      <span>Kirim Pesan</span>
                      <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
