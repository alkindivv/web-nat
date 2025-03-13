"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronRightIcon,
  LinkIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const portfolioItems = [
  {
    title: "Corporate Event PLN Batam",
    category: "Event Management",
    description: "Mengelola dan mengkoordinasikan event korporat PLN Batam",
    image: "/portfolio/pln-event.jpg",
    tags: ["Event Planning", "Coordination", "Corporate Communication"],
  },
  {
    title: "Social Media Campaign BNI",
    category: "Digital Marketing",
    description: "Kampanye promosi produk BNI di media sosial",
    image: "/portfolio/bni-social.jpg",
    tags: ["Social Media", "Content Creation", "Campaign Management"],
  },
  {
    title: "PR Strategy Thamrin Group",
    category: "Public Relations",
    description:
      "Pengembangan dan implementasi strategi PR untuk Thamrin Group",
    image: "/portfolio/thamrin-pr.jpg",
    tags: ["PR Strategy", "Media Relations", "Corporate Communication"],
  },
  {
    title: "Marketing Materials Design",
    category: "Content Creation",
    description: "Pembuatan materi marketing untuk berbagai kampanye",
    image: "/portfolio/marketing-materials.jpg",
    tags: ["Design", "Branding", "Marketing"],
  },
];

const categories = [
  "All",
  "Event Management",
  "Digital Marketing",
  "Public Relations",
  "Content Creation",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
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
                  Portfolio
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 dark:from-dark-accent-pink/30 dark:to-dark-accent-purple/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 dark:from-dark-accent-pink dark:to-dark-accent-purple text-white shadow-md"
                      : "bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:shadow-md border border-purple-100/50 dark:border-dark-primary/50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-surface shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-dark-primary dark:to-dark-secondary flex items-center justify-center">
                        <PhotoIcon className="w-16 h-16 text-pink-500 dark:text-dark-accent-pink" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-dark-accent-pink transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-purple-600 dark:text-dark-accent-purple mt-1">
                          {item.category}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-pink-50 dark:bg-dark-primary/50"
                      >
                        <LinkIcon className="w-5 h-5 text-pink-500 dark:text-dark-accent-pink" />
                      </motion.div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mt-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-dark-primary/50 text-purple-600 dark:text-dark-accent-purple"
                        >
                          <ChevronRightIcon className="w-3 h-3" />
                          {tag}
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
}
