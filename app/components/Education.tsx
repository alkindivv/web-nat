"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  SparklesIcon,
  CalendarIcon,
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
    <section id="education" className="layout-section">
      <div className="container-lg">
        <div className="content-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="grid gap-8">
            {educations.map((education, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* School Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="glass-icon w-16 h-16 flex items-center justify-center">
                      <AcademicCapIcon className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-pink-600">
                        {education.school}
                      </p>
                      <p className="text-sm text-gray-500">
                        {education.period}
                      </p>
                    </div>

                    <p className="text-gray-600">{education.description}</p>

                    {/* Achievements */}
                    {education.achievements && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-700">
                          Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {education.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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
