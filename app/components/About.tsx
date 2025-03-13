import { motion } from "framer-motion";
import Image from "next/image";
import { HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";

const skills = [
  "Public Relations",
  "Communication Strategy",
  "Content Creation",
  "Media Relations",
  "Event Management",
  "Crisis Management",
  "Social Media",
  "Brand Development",
];

const stats = [
  { number: "5+", label: "Tahun Pengalaman" },
  { number: "50+", label: "Proyek Sukses" },
  { number: "30+", label: "Klien Puas" },
  { number: "100+", label: "Event Terlaksana" },
];

const About = () => {
  return (
    <section
      id="about"
      className="layout-section py-14 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative Elements - Adjusted for mobile */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-purple-100/20 rounded-full blur-3xl -z-10" />

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
                  Tentang Saya
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image Column - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="relative">
                {/* Decorative frame - Adjusted for mobile */}
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-full h-full border-t-2 border-l-2 border-pink-300/50 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full border-b-2 border-r-2 border-purple-300/50 rounded-br-2xl sm:rounded-br-3xl"></div>

                {/* Main image */}
                <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-600/10 to-purple-600/10 mix-blend-overlay z-10" />
                  <Image
                    src="/a.jpeg"
                    alt="Natasya Artameivia"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  Saya adalah seorang{" "}
                  <span className="text-pink-600 font-medium">
                    Communication & Public Relations Specialist
                  </span>{" "}
                  dengan pengalaman luas dalam membangun citra positif dan
                  hubungan yang kuat.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 leading-relaxed">
                  Saya memiliki keahlian dalam mengembangkan strategi komunikasi
                  yang efektif, mengelola krisis, dan membangun hubungan dengan
                  stakeholders untuk mencapai tujuan organisasi.
                </p>
              </div>

              {/* Skills - Adjusted for mobile */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-3 sm:mb-4">
                  Keahlian:
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-gray-700 rounded-full text-xs font-medium shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Stats - Adjusted for mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-6 sm:mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="relative py-2 px-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 rounded-lg transform group-hover:scale-110 transition-transform duration-300 -z-10"></div>
                      <div className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent py-1 sm:py-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
