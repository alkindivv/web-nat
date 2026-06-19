"use client";

import React from "react";
import {
  AcademicCapIcon,
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
      className="layout-section py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white opacity-80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="layout-container relative z-10 px-4 sm:px-6">
        <div className="content-wrapper max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-center font-dancing">
              <span className="relative inline-block">
                <span className="font-bold mb-6">Education &</span>{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Certification
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-1/2 top-0 h-full w-px bg-gradient-to-b from-pink-200 to-purple-200 transform -translate-x-px hidden sm:block"></div>

            {educations.map((education, index) => (
              <div
                key={index}
                className={`group mb-8 sm:mb-12 last:mb-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-8 items-start ${
                    index % 2 === 0
                      ? "sm:pr-1/2"
                      : "sm:pl-1/2 sm:flex-row-reverse"
                  }`}
                >
                  {/* Logo/Icon Container */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 p-0.5">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {education.logo ? (
                          <Image
                            src={education.logo}
                            alt={`${education.school} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <>
                            <AcademicCapIcon className="w-8 h-8 text-pink-600 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 transform -translate-x-1/2 hidden sm:block"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100/50 transition-all duration-300 hover:shadow-md hover:border-pink-200 relative">
                      {/* Decorative arrow */}
                      <div className="absolute top-6 -left-2 w-4 h-4 bg-white border-l border-t border-pink-100/50 transform rotate-45 hidden sm:block"></div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                            {education.degree}
                          </h3>
                          <p className="text-base font-medium text-pink-600">
                            {education.school}
                          </p>
                          <p className="text-sm text-gray-500">
                            {education.period}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {education.description}
                          </p>
                        </div>

                        {education.achievements && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-700">
                              Achievements:
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {education.achievements.map(
                                (achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600 leading-relaxed"
                                  >
                                    {achievement}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
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

export default Education;
