"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  SparklesIcon,
  CalendarIcon,
  BuildingLibraryIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  achievements?: string[];
  logo?: string | null;
}

const educations: Education[] = [
  {
    degree: "Master of Law - Business Law",
    school: "Universitas Internasional Batam",
    period: "2023 - 2025",
    description: "Focusing on Business Law and Corporate Regulations.",
    achievements: ["Current GPA: -"],
    logo: "/uib.png",
  },
  {
    degree: "Bachelor of Communication Science",
    school: "Universitas Sriwijaya",
    period: "2019 - 2022",
    description:
      "Specialized in Public Relations and Corporate Communications.",
    achievements: [
      "Graduated with GPA: 3.80 (Cumlaude)",
      "Fastest Graduation Student in Faculty of Communication Science",
      "Internal Department Secretary FISIP UNSRI (2021-2022)",
      "Academic and Professional Division Member (2020-2021)",
      "Marketing Division Member - Comment 2021",
      "Event Division Member - Facation 2021",
    ],
    logo: "/unsri.png",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="layout-section py-14 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236,72,153,0.1) 1px, transparent 0)`,
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
            <h2 className="text-4xl sm:text-5xl font-bold text-center font-dancing">
              <span className="relative inline-block">
                <span className="font-bold mb-6">Education &</span>{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Certification
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Connection line with animated gradient */}
                {index !== educations.length - 1 && (
                  <div className="absolute left-8 top-[4.5rem] bottom-0 w-px hidden sm:block overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-pink-200 via-purple-200 to-transparent animate-pulse"></div>
                  </div>
                )}

                <div className="relative flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  {/* Left side - Timeline and Logo */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 p-0.5 group-hover:shadow-lg transition-shadow duration-300">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {education.logo ? (
                          <Image
                            src={education.logo}
                            alt={`${education.school} logo`}
                            width={40}
                            height={40}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <>
                            <AcademicCapIcon className="w-8 h-8 text-pink-600 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Timeline dot with animation */}
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-x-1/2 hidden sm:block">
                      <div className="absolute inset-0 rounded-full bg-pink-400 "></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BuildingLibraryIcon className="w-4 h-4 text-pink-600" />
                          <p className="text-base font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            {education.school}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-purple-50/50 px-3 py-1 rounded-full border border-purple-100/50">
                        <CalendarIcon className="w-4 h-4" />
                        <p className="text-sm">{education.period}</p>
                      </div>
                    </div>

                    {/* Description with gradient border */}
                    <div className="relative pl-4 border-l-2 border-gradient-y-pink-purple">
                      <p className="text-gray-600 leading-relaxed">
                        {education.description}
                      </p>
                    </div>

                    {/* Achievements with unique styling */}
                    {education.achievements &&
                      education.achievements.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100">
                              <SparklesIcon className="w-4 h-4 text-pink-600" />
                            </div>
                            <h4 className="text-sm font-medium uppercase tracking-wide text-gray-700">
                              Pencapaian
                            </h4>
                          </div>

                          <div className="grid gap-2">
                            {education.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="group/item flex items-start gap-3 relative pl-4"
                              >
                                <div className="absolute left-0 top-[0.6rem] w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover/item:scale-150 transition-transform duration-300"></div>
                                <p className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <style jsx>{`
            .border-gradient-y-pink-purple {
              border-image: linear-gradient(to bottom, #ec4899, #a855f7) 1;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Education;
