"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const portfolioItems = [
  {
    title: "Corporate Event PLN Batam",
    category: "Event Management",
    description:
      "Mengelola dan mengkoordinasikan event korporat PLN Batam dengan menghadirkan konsep yang elegan dan profesional. Acara ini dihadiri oleh lebih dari 500 tamu undangan dari berbagai kalangan bisnis dan pemerintahan.",
    images: ["/nat.jpeg", "/a.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Event Planning", "Coordination", "Corporate Communication"],
    year: "2023",
    featured: true,
  },
  {
    title: "Social Media Campaign BNI",
    category: "Digital Marketing",
    description:
      "Merancang dan mengeksekusi kampanye media sosial untuk produk BNI dengan pendekatan yang fresh dan modern. Kampanye ini berhasil meningkatkan engagement rate sebesar 150% dalam waktu 3 bulan.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Social Media", "Content Creation", "Campaign Management"],
    year: "2023",
    featured: false,
  },
  {
    title: "PR Strategy Thamrin Group",
    category: "Public Relations",
    description:
      "Mengembangkan dan mengimplementasikan strategi PR yang komprehensif untuk Thamrin Group, mencakup media relations, internal communications, dan crisis management.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["PR Strategy", "Media Relations", "Corporate Communication"],
    year: "2022",
    featured: false,
  },
  {
    title: "Marketing Materials Design",
    category: "Content Creation",
    description:
      "Menciptakan berbagai materi marketing yang menarik dan efektif untuk mendukung kampanye pemasaran perusahaan. Termasuk brosur, presentasi, dan konten digital.",
    images: ["/nat.jpeg", "/nat.jpeg", "/nat.jpeg"],
    tags: ["Design", "Branding", "Marketing"],
    year: "2022",
    featured: false,
  },
];

// const categories = [
//   "All",
//   "Event Management",
//   "Digital Marketing",
//   "Public Relations",
//   "Content Creation",
// ];

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
              <ChevronLeftIcon className="w-5 h-5 text-purple-600" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              data-action="next"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
            >
              <ChevronRightIcon className="w-5 h-5 text-purple-600" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/80 text-purple-600 text-xs font-medium rounded-full shadow-lg">
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
                ? "ring-2 ring-purple-500 ring-offset-1"
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
                  <ChevronLeftIcon className="w-6 h-6 text-purple-600" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  data-action="next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all"
                >
                  <ChevronRightIcon className="w-6 h-6 text-purple-600" />
                </button>
              </>
            )}

            {/* Preview Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/80 text-purple-600 font-medium rounded-full shadow-lg">
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
  featured: boolean;
}

export default function Portfolio() {
  const [selectedCategory] = useState("All");
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
      className="layout-section py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-white"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="layout-container relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 block"
            >
              My Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Featured
              <span className="font-dancing bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
            </motion.h2>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg"
            >
              Koleksi proyek-proyek terbaik yang menggambarkan kreativitas dan
              dedikasi dalam setiap detail
            </motion.p> */}
          </div>

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl shadow-lg shadow-purple-500/25"
                      : "text-gray-600 hover:text-pink-600"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div> */}

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  item.featured ? "md:col-span-8" : "md:col-span-4"
                } group cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative group">
                  {/* Decorative frame with animation */}
                  <div className="absolute -top-3 -left-3 w-full h-full border-t-2 border-l-2 border-pink-300/50 rounded-tl-2xl transition-all duration-300 group-hover:border-pink-400/70 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-b-2 border-r-2 border-purple-300/50 rounded-br-2xl transition-all duration-300 group-hover:border-purple-400/70 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                  {/* Enhanced image container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-purple-600/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-70" />
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-pink-200 text-sm font-medium tracking-wider uppercase mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white text-2xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
              // className="fixed inset-0 bg-pink-300/80 z-50 backdrop-blur-xl overflow-y-auto"
              className="fixed inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparentz-10 backdrop-blur-xl overflow-y-auto"
              onClick={() => setSelectedItem(null)}
            >
              <div className="min-h-screen w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Image Section */}
                    <div className="lg:w-2/3 relative bg-gradient-to-br from-pink-50 to-purple-50">
                      <div className="h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
                        <ImageSlider
                          images={selectedItem.images}
                          title={selectedItem.title}
                        />
                      </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="lg:w-1/3 pt-5 pl-3 lg:pt-7 lg:pl-3 flex flex-col">
                      <div className="mb-auto">
                        <span className="text-xl sm:text-2xl font-dancing text-pink-600 mb-2 block">
                          {selectedItem.category}
                        </span>
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          {selectedItem.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                          {selectedItem.description}
                        </p>

                        <div className="space-y-6">
                          <div>
                            {/* <h3 className="text-sm font-semibold uppercase tracking-wider text-pink-600 mb-3">
                              Skills & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedItem.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className=" px-2 sm:px-1 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-purple-500 border border-purple-100"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div> */}
                          </div>

                          {/* <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-3">
                              Year
                            </h3>
                            <p className="text-gray-600">{selectedItem.year}</p>
                          </div> */}
                        </div>
                      </div>

                      {/* Close Button */}
                      {/* <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(null);
                        }}
                        className="mt-8 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:shadow-lg transition-shadow"
                      >
                        Close Project
                      </button> */}
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
