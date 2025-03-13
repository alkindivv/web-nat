import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50 pt-12 sm:pt-16 pb-6 sm:pb-8">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute -top-40 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Natasya Artameivia
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Communication & Public Relations Specialist dengan fokus pada
                strategi komunikasi yang efektif dan membangun hubungan yang
                kuat.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2 sm:gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-pink-600/10 to-purple-600/10 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:ml-auto">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Navigasi
              </h4>
              <ul className="grid grid-cols-2 sm:block sm:space-y-2 gap-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-pink-300 inline-block"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Kontak
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>Batam, Indonesia</li>
                <li className="break-all">
                  <a
                    href="mailto:natasyaartameivia@gmail.com"
                    className="hover:text-pink-600 transition-colors duration-300"
                  >
                    natasyaartameivia@gmail.com
                  </a>
                </li>
                <li>
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
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent my-4 sm:my-6"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1 text-center sm:text-left">
              <span>
                &copy; {currentYear} Natasya Artameivia. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span>Made with</span>
              <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
              <span>by</span>{" "}
              <a
                href="https://alkindivv.site"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-pink-700 transition-colors duration-300"
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
