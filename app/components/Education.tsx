"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  SparklesIcon,
  CalendarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    degree: "Master of Law - Business Law",
    school: "Universitas Internasional Batam",
    period: "2025 - Present",
    description: "Focusing on Business Law and Corporate Regulations.",
    achievements: [
      "Current GPA: 3.90",
      "Research Assistant for Business Law Department",
      "Member of Law Student Association",
    ],
  },
  {
    degree: "Bachelor of Communication Science",
    school: "Universitas Sriwijaya",
    period: "2019 - 2022",
    description:
      "Specialized in Public Relations and Corporate Communications.",
    achievements: [
      "Graduated with GPA: 3.80 (Cumlaude)",
      "Internal Department Secretary FISIP UNSRI (2021-2022)",
      "Academic and Professional Division Member (2020-2021)",
      "Marketing Division Member - Comment 2021",
      "Event Division Member - Facation 2021",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="layout-section py-14 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative Elements - Adjusted for mobile */}
      <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100/20 rounded-full blur-3xl -z-10" />

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
                  Pendidikan
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:gap-12">
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:shadow-xl transition-all duration-500 border border-purple-100 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden hover:translate-y-[-5px]">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
                    {/* School Logo/Icon - Adjusted for mobile */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow-md group-hover:from-pink-200 group-hover:to-purple-200 transition-colors duration-300">
                        <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                      </div>
                    </div>

                    {/* Content - Adjusted for mobile */}
                    <div className="flex-grow space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                          {education.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BuildingLibraryIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                          <p className="text-base sm:text-lg text-purple-600 font-medium">
                            {education.school}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-gray-500">
                          <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <p className="text-xs sm:text-sm">
                            {education.period}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {education.description}
                      </p>

                      {/* Achievements - Adjusted for mobile */}
                      {education.achievements && (
                        <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                          <h4 className="font-medium text-gray-700 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                            <span>Pencapaian:</span>
                          </h4>
                          <div className="pl-1.5 sm:pl-2 border-l-2 border-pink-200">
                            {education.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="relative pl-3 sm:pl-4 py-1.5 sm:py-2"
                              >
                                <div className="absolute left-[-5px] top-[12px] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
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

export default Education;
