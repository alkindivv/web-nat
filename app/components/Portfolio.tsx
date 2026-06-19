"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-all duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Image counter */}
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white font-medium">
        {currentIndex + 1} / {images.length}
      </div>
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          setIsModalOpen(false);
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

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem, isModalOpen]);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white to-purple-50/80"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 text-sm font-medium text-pink-600 mb-4 animate-fade-up">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up [animation-delay:100ms]">
            Featured
            <span className="font-dancing bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Works
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up [animation-delay:200ms]">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25"
                  : "bg-white/80 text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-pink-200 text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && isModalOpen && (
          <div
            className="fixed inset-0 z-50 overflow-hidden"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div
                className="bg-white rounded-3xl overflow-hidden max-w-6xl w-full animate-scale-up"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Image Section */}
                  <div className="lg:w-2/3 h-[400px] lg:h-[600px] relative">
                    <ImageSlider
                      images={selectedItem.images}
                      title={selectedItem.title}
                    />
                  </div>

                  {/* Right: Content Section */}
                  <div className="lg:w-1/3 p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-3">
                        {selectedItem.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {selectedItem.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                          Technologies & Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          Year
                        </h3>
                        <p className="text-gray-600">{selectedItem.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
