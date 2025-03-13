"use client";

import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";

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
      className="layout-section bg-gradient-to-b from-pink-50/50 to-white"
    >
      <div className="container-lg">
        <div className="content-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="grid gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="glass-icon w-16 h-16 flex items-center justify-center">
                      <BriefcaseIcon className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-pink-600">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500">
                        {experience.period}
                      </p>
                    </div>

                    <p className="text-gray-600">{experience.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
