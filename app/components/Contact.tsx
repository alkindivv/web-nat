"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="layout-section">
      <div className="container-md">
        <div className="content-wrapper">
          <h2 className="section-title text-center mb-12">Get in Touch</h2>

          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Let's Connect
                </h3>
                <p className="text-gray-600">
                  Feel free to reach out for collaborations or just a friendly
                  chat.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="glass-icon">
                      <EnvelopeIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:nataliayeutu@gmail.com"
                        className="text-pink-600 hover:text-pink-700"
                      >
                        nataliayeutu@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="glass-icon">
                      <MapPinIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-700">Batam, Indonesia</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href="https://github.com/natyeu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-icon hover:scale-110 transition-transform duration-300"
                    >
                      <FaGithub className="w-6 h-6 text-pink-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nataliayeutu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-icon hover:scale-110 transition-transform duration-300"
                    >
                      <FaLinkedin className="w-6 h-6 text-pink-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
