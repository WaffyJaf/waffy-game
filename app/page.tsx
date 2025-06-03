"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Banner images for the carousel
const bannerImages = [
  { src: '/banner/banner-3.jpg', alt: 'เกมมาใหม่', href: '/new-game' },
  { src: '/banner/banner-1.jpg', alt: 'เกมยอดนิยม', href: '/all-time-popular' },
  { src: '/banner/banner-2.jpg', alt: 'สเปคคอมเล่นเกม', href: '/pc-specs' },
];

// Game categories
const gameCategories = [
  {
    id: 'all-time',
    title: '10 เกมยอดนิยมตลอดกาล',
    description: 'เกมระดับตำนานที่ครองใจผู้เล่นทั่วโลก.',
    image: '/banner/banner-1.jpg',
    href: '/all-time-popular',
  },
  {
    id: 'pc-story',
    title: '7 เกมแนวเนื้อเรื่องผจญภัย',
    description: 'เกม PC ที่มีเนื้อเรื่องลึกซึ้งและกราฟิกสุดอลังการ.',
    image: '/gamepc/bb.jpg',
    href: '/pc-story',
  },
  {
    id: 'mobile',
    title: '10 เกมมือถือน่าเล่น',
    description: 'เกมมือถือที่สนุกและเข้าถึงง่ายสำหรับทุกวัย.',
    image: '/gamemobile/afk.jpg',
    href: '/mobile',
  },
  {
    id: 'new-game',
    title: 'เกมมาใหม่ห้ามพลาด 2025',
    description: 'เกมมาใหม่ปี 2025 ที่น่าจับตามอง.',
    image: '/newgame/inzoi.jpg',
    href: '/new-game',
  },
];

// News items
const newsItems = [
  {
    id: 'news-1',
    title: 'แนะนำคีย์บอร์ดราคาสบายกระเป๋า',
    description: 'แนะนำคีย์บอร์ดและความแตกต่างของ Blue Switch vs Red Switch.',
    image: '/banner/key-banner.jpg',
    href: '/keyboard-1',
  },
  {
    id: 'news-2',
    title: '5 ไอเดีย จัดโต๊ะคอม จัดโต๊ะทำงาน',
    description: 'ไอเดียจัดโต๊ะคอมที่ติดแกรม มินิมอล ไม่ซ้ำใคร.',
    image: '/banner/waffy.jpg',
    href: '/idea-work',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    setShowText(true);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    setShowText(true);
  };

  const handleBannerClick = () => {
    setShowText(false);
  };

  // Animation variants for sections and cards
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
      transition: { duration: 0.3 },
    },
  };

 return (
    <div className="min-h-screen px-6 mx-auto text-white bg-gradient-to-b max-w-7xl">
      {/* Banner Section */}
      <motion.section
        className="relative overflow-hidden text-center rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence>
          {showText && (
            <motion.div
              className="p-4 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative w-full md:h-[400px]">
          <Link href={bannerImages[currentSlide].href} onClick={handleBannerClick} className="relative block w-full h-full">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={bannerImages[currentSlide].src}
                alt={bannerImages[currentSlide].alt}
                width={1200}
                height={400}
                className="object-cover border-2 rounded-lg border-cyan-500"
                priority={currentSlide === 0}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/60 to-transparent" />
            </motion.div>
          </Link>
        </div>
        {/* Carousel Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute p-2 transition-all duration-300 transform -translate-y-1/2 rounded-full text-cyan-300 bg-gray-900/70 left-4 top-1/2 hover:bg-cyan-500/50"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute p-2 transition-all duration-300 transform -translate-y-1/2 rounded-full text-cyan-300 bg-gray-900/70 right-4 top-1/2 hover:bg-cyan-500/50"
        >
          ❯
        </button>
        {/* Carousel Dots */}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setShowText(true);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="mt-15"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-8 text-center">
          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
            เกมแนะนำสำหรับคุณ
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            คุณกำลังตามหาเกมอยู่ใช่หรือไม่ สำรวจเกมที่เหมาะกับคุณได้ที่นี่!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
          {gameCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Link
                href={category.href}
                className="block overflow-hidden transition-all duration-300 bg-gray-900 border rounded-lg border-cyan-500/30 hover:border-cyan-500"
              >
                <div className="relative w-full h-70">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-opacity duration-300 opacity-90 hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold text-cyan-300">{category.title}</h2>
                  <p className="text-gray-400">{category.description}</p>
                  <span className="inline-block mt-2 transition-colors duration-300 text-cyan-400 hover:text-cyan-300">
                    อ่านเพิ่มเติม
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="mt-12 mb-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-center text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          How To
        </h2>
        <p className="mb-6 text-center text-gray-300">
          อัปเดตบทความน่ารู้ สำหรับสาย IT.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {newsItems.map((news) => (
            <motion.div
              key={news.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Link
                href={news.href}
                className="block overflow-hidden transition-all duration-300 bg-gray-900 border rounded-lg border-cyan-500/30 hover:border-cyan-500"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-opacity duration-300 opacity-90 hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-cyan-300">{news.title}</h3>
                  <p className="text-gray-400">{news.description}</p>
                  <span className="inline-block mt-2 transition-colors duration-300 text-cyan-400 hover:text-cyan-300">
                    อ่านเพิ่มเติม
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              ...gameCategories.map((category, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'CollectionPage',
                  name: category.title,
                  description: category.description,
                  image: `https://waffy-game.vercel.app${category.image}`,
                  url: `https://waffy-game.vercel.app${category.href}`,
                },
              })),
              ...newsItems.map((news, index) => ({
                '@type': 'ListItem',
                position: index + gameCategories.length + 1,
                item: {
                  '@type': 'NewsArticle',
                  name: news.title,
                  description: news.description,
                  image: `https://waffy-game.vercel.app${news.image}`,
                  url: `https://waffy-game.vercel.app${news.href}`,
                },
              })),
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'หน้าแรก',
                  item: 'https://waffy-game.vercel.app',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'เกมยอดนิยม',
                  item: 'https://waffy-game.vercel.app/all-time-popular',
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}