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
    <section id="about" className="layout-section">
      <div className="layout-container">
        <div className="content-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image Column */}
            <div className="mx-auto lg:mx-0 max-w-md">
              <div className="photo-frame rounded-2xl overflow-hidden">
                <Image
                  src="/a.jpeg"
                  alt="About Natalia"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-2xl sm:text-3xl text-gray-700">
                  Hi, I'm Natalia! I'm a passionate frontend developer with a
                  keen eye for design and user experience.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 mt-4">
                  I specialize in creating responsive and intuitive web
                  applications using modern technologies like React, Next.js,
                  and Tailwind CSS.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">
                    3+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">
                    20+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">
                    15+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">
                    5+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Awards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
