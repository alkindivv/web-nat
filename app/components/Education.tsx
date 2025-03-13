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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Pendidikan
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Connection line */}
                {index !== educations.length - 1 && (
                  <div className="absolute left-8 top-[4.5rem] bottom-0 w-px bg-gradient-to-b from-pink-200 to-purple-200/30 hidden sm:block"></div>
                )}

                <div className="relative flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                  {/* Left side - Timeline and Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 p-0.5 shadow-md">
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {education.logo ? (
                          <Image
                            src={education.logo}
                            alt={`${education.school} logo`}
                            width={64}
                            height={64}
                            className="object-contain p-2"
                          />
                        ) : (
                          <>
                            <AcademicCapIcon className="w-10 h-10 text-purple-600 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-x-1/2 hidden sm:block"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100/50">
                          <CalendarIcon className="w-4 h-4 text-purple-500" />
                          <p className="text-sm font-medium text-purple-600">
                            {education.period}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-purple-50/50">
                        <BuildingLibraryIcon className="w-5 h-5 text-purple-600" />
                        <p className="text-lg text-purple-600 font-semibold">
                          {education.school}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Achievements */}
                    {education.achievements && (
                      <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-2">
                          <SparklesIcon className="w-5 h-5 text-pink-500" />
                          <h4 className="font-semibold text-gray-700 text-lg">
                            Pencapaian
                          </h4>
                        </div>
                        <div className="grid gap-3 pl-2">
                          {education.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2"></div>
                              <p className="flex-1 text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
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
        </div>
      </div>
    </section>
  );
};

export default Education;
