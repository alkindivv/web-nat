"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const portfolioItems = [
  {
    title: "Corporate Event PLN Batam",
    category: "Event Management",
    description:
      "Mengelola dan mengkoordinasikan event korporat PLN Batam dengan menghadirkan konsep yang elegan dan profesional. Acara ini dihadiri oleh lebih dari 500 tamu undangan dari berbagai kalangan bisnis dan pemerintahan.",
    images: ["/nat.jpeg", "/a.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Event Planning", "Coordination", "Corporate Communication"],
    year: "2023",
  },
  {
    title: "Social Media Campaign BNI",
    category: "Digital Marketing",
    description:
      "Merancang dan mengeksekusi kampanye media sosial untuk produk BNI dengan pendekatan yang fresh dan modern. Kampanye ini berhasil meningkatkan engagement rate sebesar 150% dalam waktu 3 bulan.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Social Media", "Content Creation", "Campaign Management"],
    year: "2023",
  },
  {
    title: "PR Strategy Thamrin Group",
    category: "Public Relations",
    description:
      "Mengembangkan dan mengimplementasikan strategi PR yang komprehensif untuk Thamrin Group, mencakup media relations, internal communications, dan crisis management.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["PR Strategy", "Media Relations", "Corporate Communication"],
    year: "2022",
  },
  {
    title: "Marketing Materials Design",
    category: "Content Creation",
    description:
      "Menciptakan berbagai materi marketing yang menarik dan efektif untuk mendukung kampanye pemasaran perusahaan. Termasuk brosur, presentasi, dan konten digital.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Design", "Branding", "Marketing"],
    year: "2022",
  },
];

const categories = [
  "All",
  "Event Management",
  "Digital Marketing",
  "Public Relations",
  "Content Creation",
];

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative flex flex-col h-full">
      {/* Main Image */}
      <div className="relative flex-1 rounded-xl overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={`${title} - image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500"
          onClick={() => setShowPreview(true)}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              data-action="prev"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
            >
              <ChevronLeftIcon className="w-5 h-5 text-pink-600" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              data-action="next"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
            >
              <ChevronRightIcon className="w-5 h-5 text-pink-600" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/80 text-pink-600 text-xs font-medium rounded-full shadow-lg">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid sm:grid-cols-10 grid-cols-8 gap-16 sm:gap-0.5 mt-2 px-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(e) => handleThumbnailClick(index, e)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
              currentImageIndex === index
                ? "ring-2 ring-pink-500 ring-offset-1"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Full Screen Preview */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center backdrop-blur-md"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${title} - preview`}
              width={1920}
              height={1080}
              className="object-contain w-full h-full"
            />

            {/* Preview Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  data-action="prev"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-pink-600" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  data-action="next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
                >
                  <ChevronRightIcon className="w-6 h-6 text-pink-600" />
                </button>
              </>
            )}

            {/* Preview Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/80 text-pink-600 font-medium rounded-full shadow-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  images: string[];
  tags: string[];
  year: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;

      switch (e.key) {
        case "Escape":
          setSelectedItem(null);
          break;
        case "ArrowLeft":
          document
            .querySelector<HTMLButtonElement>('[data-action="prev"]')
            ?.click();
          break;
        case "ArrowRight":
          document
            .querySelector<HTMLButtonElement>('[data-action="next"]')
            ?.click();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  return (
    <section
      id="portfolio"
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
          {/* Section Header */}
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
                  Portfolio
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 shadow-sm border border-pink-100"
                        : "text-gray-600 hover:text-pink-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${
                  index % 3 === 0 ? "md:col-span-2" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-purple-100/50">
                  {/* Featured Image */}
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-sm font-medium text-pink-200 mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 text-pink-600 text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
                    {item.images.length} Photos
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal */}
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-pink-900/20 z-50 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedItem(null)}
            >
              <div className="min-h-screen w-full max-w-6xl mx-auto pt-24 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-pink-300/80 text-sm font-medium block mb-2"
                    >
                      {selectedItem.category}
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      // className="text-3xl sm:text-4xl font-bold text-white"
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      {selectedItem.title}
                    </motion.h2>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(null);
                    }}
                    className="p-2.5 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 bg-white rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image Section */}
                    <div className="lg:w-2/3 relative bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="h-[450px] lg:h-[650px]">
                        <ImageSlider
                          images={selectedItem.images}
                          title={selectedItem.title}
                        />
                      </div>
                    </div>

                    {/* Right Sidebar Content */}
                    <div className="lg:w-1/3 p-6 sm:p-8 border-l border-purple-100 overflow-y-auto">
                      <div className="space-y-8">
                        {/* Description */}
                        <div>
                          <h3 className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                            Deskripsi Proyek
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {selectedItem.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div>
                          <h3 className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                            Skills & Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 border border-pink-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Additional Info */}
                        {/* <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                              Tahun
                            </h3>
                            <p className="text-gray-600">{selectedItem.year}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                              Kategori
                            </h3>
                            <p className="text-gray-600">
                              {selectedItem.category}
                            </p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
