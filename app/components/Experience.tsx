"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "Executive Marketing Assistant",
    company: "PT PLN Batam",
    period: "Oktober 2023 - Sekarang",
    description:
      "Bertanggung jawab dalam komunikasi pemasaran dan pelayanan pelanggan.",
    skills: ["Communication", "MC"],
  },
  {
    title: "Bank Teller",
    company: "PT. BANK NEGARA INDONESIA (Persero) Tbk.",
    period: "Mei 2023 - September 2023",
    description:
      "Menangani transaksi setoran tunai, penarikan, transaksi valuta asing, dan promosi program korporat.",
    skills: ["Customer Service", "Branding"],
  },
  {
    title: "Communications Officer",
    company: "Thamrin Group",
    period: "Juni 2022 - Agustus 2022",
    description:
      "Mengelola branding, social media, public relations, event management, dan customer relations.",
    skills: ["Public Relations", "Event Management"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="layout-section py-14 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-pink-50/50 to-white"
    >
      {/* Decorative Elements - Adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/20 rounded-full blur-3xl -z-10" />

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-[200px] bottom-20 w-0.5 bg-gradient-to-b from-pink-200 to-purple-200 hidden md:block -z-10"></div>

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
                  Pengalaman
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:gap-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot for desktop */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>

                <div
                  className={`card hover:shadow-xl transition-all duration-500 border border-pink-100 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden hover:translate-y-[-5px] ${
                    index % 2 === 0 ? "md:mr-[5%]" : "md:ml-[5%]"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
                    {/* Company Logo/Icon - Adjusted for mobile */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow-md">
                        <BriefcaseIcon className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
                      </div>
                    </div>

                    {/* Content - Adjusted for mobile */}
                    <div className="flex-grow space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BuildingOfficeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600" />
                          <p className="text-base sm:text-lg text-pink-600 font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-gray-500">
                          <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <p className="text-xs sm:text-sm">
                            {experience.period}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Skills - Adjusted for mobile */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200/50 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
