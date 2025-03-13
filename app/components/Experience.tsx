"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const experiences = [
  {
    title: "Executive Marketing Assistant",
    company: "PT PLN Batam",
    period: "Oktober 2023 - Sekarang",
    description:
      "Bertanggung jawab dalam komunikasi pemasaran dan pelayanan pelanggan.",
    skills: ["Communication", "MC"],
    logo: "/plb.png",
  },
  {
    title: "Bank Teller",
    company: "PT. BANK NEGARA INDONESIA (Persero) Tbk.",
    period: "Mei 2023 - September 2023",
    description:
      "Menangani transaksi setoran tunai, penarikan, transaksi valuta asing, dan promosi program korporat.",
    skills: ["Customer Service", "Branding"],
    logo: "/bni-bg.png",
  },
  {
    title: "Communications Officer",
    company: "Thamrin Group",
    period: "Juni 2022 - Agustus 2022",
    description:
      "Mengelola branding, social media, public relations, event management, dan customer relations.",
    skills: ["Public Relations", "Event Management"],
    logo: "/thamrin.png",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="layout-section py-14 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-50 via-purple-50 to-white"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168,85,247,0.1) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
      </div>

      <div className="layout-container relative z-10 px-4 sm:px-6">
        <div className="content-wrapper max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Pengalaman
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Connection line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-[4.5rem] bottom-0 w-px bg-gradient-to-b from-pink-200 to-purple-200/30 hidden sm:block"></div>
                )}

                <div className="relative flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                  {/* Left side - Timeline and Icon/Logo */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 p-0.5">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {experience.logo ? (
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <>
                            <BriefcaseIcon className="w-8 h-8 text-pink-600 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-x-1/2 hidden sm:block"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BuildingOfficeIcon className="w-4 h-4 text-purple-500" />
                          <p className="text-base text-purple-600 font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-purple-50/50 px-3 py-1 rounded-full border border-purple-100/50">
                        <CalendarIcon className="w-4 h-4" />
                        <p className="text-sm">{experience.period}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 border border-pink-100/50 group-hover:border-pink-200/50 transition-colors duration-300"
                        >
                          <ChevronRightIcon className="w-3 h-3 text-pink-500" />
                          {skill}
                        </span>
                      ))}
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
