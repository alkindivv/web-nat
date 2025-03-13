import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang", href: "#about" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Pendidikan", href: "#education" },
    { name: "Kontak", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://instagram.com/natyeu",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://linkedin.com/in/natasya-artameivia",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://twitter.com/natyeu",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30 pt-16 sm:pt-20 pb-8 sm:pb-10">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute -top-40 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 sm:mb-14">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Natasya Artameivia
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                Communication & Public Relations Specialist dengan fokus pada
                strategi komunikasi yang efektif dan membangun hubungan yang
                kuat.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-600/5 to-purple-600/5 hover:from-pink-600/10 hover:to-purple-600/10 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5">
                Navigasi
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-300 group-hover:bg-pink-500 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5">
                Kontak
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                <li className="flex items-center gap-2">
                  <HiMapPin className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>Batam, Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiEnvelope className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <a
                    href="mailto:natasyaartameivia@gmail.com"
                    className="hover:text-pink-600 transition-colors duration-300"
                  >
                    natasyaartameivia@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <HiPhone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-pink-600 transition-colors duration-300"
                  >
                    +62 812 3456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent mb-6 sm:mb-8"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="text-center sm:text-left">
              &copy; {currentYear} Natasya Artameivia. All rights reserved.
            </div>

            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-pink-500" />
              <span>by</span>{" "}
              <a
                href="https://alkindivv.site"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-pink-600 transition-colors duration-300"
              >
                AL KINDI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
