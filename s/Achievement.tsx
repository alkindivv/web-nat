"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const achievements = [
  {
    title: "Fastest Graduation",
    subtitle: "Faculty of Communication Science",
    description:
      "Lulus tercepat di Fakultas Ilmu Komunikasi Universitas Sriwijaya",
    icon: AcademicCapIcon,
    gradient:
      "from-pink-500 to-rose-500 dark:from-dark-accent-pink dark:to-dark-accent-purple",
  },
  {
    title: "Cumlaude Graduate",
    subtitle: "GPA 3.80",
    description: "Lulus dengan predikat Cumlaude dan IPK 3.80",
    icon: StarIcon,
    gradient:
      "from-purple-500 to-indigo-500 dark:from-dark-accent-purple dark:to-dark-primary",
  },
  {
    title: "Internal Department Secretary",
    subtitle: "FISIP UNSRI 2021-2022",
    description: "Menjabat sebagai Sekretaris Internal Departemen",
    icon: SparklesIcon,
    gradient:
      "from-pink-500 to-purple-500 dark:from-dark-accent-pink dark:to-dark-accent-purple",
  },
  {
    title: "Event Management",
    subtitle: "Multiple Successful Events",
    description: "Mengelola berbagai event kampus dan korporat dengan sukses",
    icon: TrophyIcon,
    gradient:
      "from-indigo-500 to-purple-500 dark:from-dark-primary dark:to-dark-accent-purple",
  },
];

export default function Achievement() {
  return (
    <section
      id="achievements"
      className="layout-section py-14 sm:py-20 md:py-24 relative overflow-hidden dark:bg-dark-background"
    >
      <div className="layout-container relative z-10 px-4 sm:px-6">
        <div className="content-wrapper max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 dark:from-dark-accent-pink dark:to-dark-accent-purple bg-clip-text text-transparent">
                  Pencapaian
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 dark:from-dark-accent-pink/30 dark:to-dark-accent-purple/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm border border-purple-100/50 dark:border-dark-primary/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} p-2.5 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-dark-accent-pink transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-600 dark:text-dark-accent-purple mt-1">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {achievement.description}
                      </p>
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
}
