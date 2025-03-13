import { motion } from "framer-motion";
import Image from "next/image";
import {
  HeartIcon,
  SparklesIcon,
  UserIcon,
  BriefcaseIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    name: "Public Relations",
    description:
      "Membangun dan memelihara hubungan positif dengan media, stakeholders, dan masyarakat",
  },
  {
    name: "Communication Strategy",
    description:
      "Mengembangkan dan mengimplementasikan strategi komunikasi yang efektif untuk berbagai platform",
  },
  {
    name: "Content Creation",
    description:
      "Membuat konten kreatif dan engaging untuk website, media sosial, dan materi promosi",
  },
  {
    name: "Media Relations",
    description:
      "Mengelola hubungan dengan media dan mengorganisir press conference",
  },
  {
    name: "Event Management",
    description:
      "Merencanakan dan mengeksekusi event korporat, promosi, dan gathering",
  },
  {
    name: "Corporate Branding",
    description:
      "Mengembangkan dan menjaga konsistensi brand identity perusahaan",
  },
  {
    name: "Social Media Management",
    description:
      "Mengelola presence dan engagement di berbagai platform media sosial",
  },
  {
    name: "Customer Relations",
    description: "Membangun dan mempertahankan hubungan baik dengan pelanggan",
  },
  {
    name: "Financial Services",
    description: "Menangani transaksi perbankan dan promosi produk keuangan",
  },
  {
    name: "Marketing Communications",
    description:
      "Mengintegrasikan strategi marketing dan komunikasi untuk mencapai tujuan bisnis",
  },
];

const stats = [
  {
    number: "3+",
    label: "Perusahaan Besar",
    detail: "BNI, PLN Batam, dan Thamrin Group",
    icon: BriefcaseIcon,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    number: "2+",
    label: "Tahun Pengalaman",
    detail: "Di bidang Marketing & Komunikasi",
    icon: StarIcon,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    number: "20+",
    label: "Event Sukses",
    detail: "Corporate & Marketing Events",
    icon: TrophyIcon,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    number: "100+",
    label: "Pelanggan Puas",
    detail: "Across Different Industries",
    icon: HeartIcon,
    gradient: "from-indigo-500 to-purple-500",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="layout-section py-14 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
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

      <div className="layout-container mx-auto relative z-10 px-4 sm:px-6">
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
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Tentang Saya
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {/* Top Section: Image and Main Description */}
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Enhanced Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative mx-auto lg:mx-0 max-w-md"
              >
                <div className="relative group">
                  {/* Decorative frame with animation */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-t-2 border-l-2 border-pink-300/50 rounded-tl-3xl transition-all duration-300 group-hover:border-pink-400/70 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-b-2 border-r-2 border-purple-300/50 rounded-br-3xl transition-all duration-300 group-hover:border-purple-400/70 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                  {/* Enhanced image container */}
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-purple-600/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-70" />
                    <Image
                      src="/a.jpeg"
                      alt="Natasya Artameivia"
                      width={500}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100">
                    <UserIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Marketing & Communications Professional
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-base text-gray-600 leading-relaxed">
                    Saya adalah seorang profesional di bidang Marketing dan
                    Komunikasi dengan pengalaman yang beragam di berbagai
                    industri terkemuka. Saat ini, saya berperan sebagai{" "}
                    <span className="text-pink-600 font-medium">
                      Executive Marketing Assistant di PT PLN Batam
                    </span>
                    , di mana saya bertanggung jawab dalam pengembangan dan
                    implementasi strategi pemasaran yang inovatif untuk
                    meningkatkan brand awareness dan engagement pelanggan.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Sebelumnya, saya memiliki pengalaman berharga sebagai{" "}
                    <span className="text-pink-600 font-medium">
                      Bank Teller di PT Bank Negara Indonesia (BNI)
                    </span>
                    , di mana saya menangani berbagai transaksi keuangan,
                    promosi program korporat, dan berinteraksi langsung dengan
                    nasabah.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Middle Section: Additional Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-full lg:ml-0 space-y-0 sm:space-y-4 lg:pr-0"
            >
              <p className="text-base text-gray-600 leading-relaxed">
                Sebagai{" "}
                <span className="text-pink-600 font-medium">
                  Communications Officer di Thamrin Group
                </span>
                , saya telah berhasil mengelola berbagai aspek komunikasi
                perusahaan, termasuk pengembangan strategi branding, pengelolaan
                media sosial, dan pelaksanaan event-event korporat. Saya juga
                berperan aktif dalam membangun dan memelihara hubungan dengan
                stakeholders, media, dan masyarakat.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Kombinasi pengalaman saya di industri energi, perbankan, dan
                properti telah membekali saya dengan perspektif yang luas dan
                kemampuan adaptasi yang tinggi dalam menghadapi berbagai
                tantangan komunikasi dan pemasaran. Saya memiliki passion yang
                kuat dalam menciptakan konten yang menarik dan strategi
                komunikasi yang efektif untuk mencapai tujuan organisasi.
              </p>
            </motion.div>

            {/* Bottom Section: Stats and Skills in Two Columns */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Stats Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrophyIcon className="w-6 h-6 text-pink-500" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Pencapaian
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100/50 hover:bg-white/80 transition-all duration-300">
                        <div className="mb-3">
                          <div
                            className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} p-2.5 transform group-hover:scale-110 transition-transform duration-300`}
                          >
                            <stat.icon className="w-full h-full text-white" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-800 mt-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {stat.detail}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <SparklesIcon className="w-6 h-6 text-pink-500" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Keahlian Profesional
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-xl hover:shadow-md hover:border-pink-200 transition-all duration-300">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
