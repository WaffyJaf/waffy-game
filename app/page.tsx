"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Banner images for the carousel
const bannerImages = [
  { src: '/banner/banner-3.jpg', alt: 'NEW GAME', href: '/new-games' },
  { src: '/banner/banner-1.jpg', alt: 'GAME POPULAR', href: '/all-time-popular' },
  { src: '/banner/banner-2.jpg', alt: 'GAMING COMPUTER', href: '/pc-specs' },
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
    href: '/popular-games/mobile',
  },
];

// News items
const newsItems = [
  {
    id: 'news-1',
    title: 'เกมใหม่ InZOI เปิดตัวในงาน GDC 2025',
    description: 'พบกับเกมจำลองชีวิตสุดล้ำจาก Krafton ที่จะเปลี่ยนวงการเกม.',
    image: '/news/news-1.jpg',
    href: '/news/inzoi-launch',
  },
  {
    id: 'news-2',
    title: 'งาน E3 2025 ประกาศวันจัดงาน',
    description: 'เตรียมพบกับงานเกมสุดยิ่งใหญ่พร้อมเผยเกมใหม่เพียบ.',
    image: '/news/news-2.jpg',
    href: '/news/e3-2025',
  },
  {
    id: 'news-3',
    title: 'อัปเดตแพทช์ล่าสุดของ RoV',
    description: 'แพทช์ใหม่เพิ่มฮีโร่และปรับสมดุลเกมสุดมันส์.',
    image: '/news/news-3.jpg',
    href: '/news/rov-patch',
  },
  {
    id: 'news-4',
    title: 'Roblox เปิดตัวโหมด VR เต็มรูปแบบ',
    description: 'สัมผัสประสบการณ์ Roblox ในโลกเสมือนจริงครั้งแรก.',
    image: '/news/news-4.jpg',
    href: '/news/roblox-vr',
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

  return (
    <div className="px-6 py-8 mx-auto bg-white max-w-7xl">
      {/* Banner Section */}
      <section className="relative overflow-hidden text-center rounded-lg bg-gradient-to-r">
        {showText && (
          <div className="p-4 mb-6">
            <h1 className="text-4xl font-bold text-left text-gray-800 md:text-5xl">
              ยินดีต้อนรับสู่ WaffyGame
            </h1>
          </div>
        )}
        <div className="relative w-full md:h-[400px]">
          {bannerImages.map((banner, index) => (
            <Link
              key={index}
              href={banner.href}
              onClick={handleBannerClick}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </Link>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75"
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
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-15">
        <div className="mb-8 text-center">
          <h2 className="mb-5 text-4xl font-bold text-gray-800 md:text-5xl ">เกมแนะนำสำหรับคุณ</h2>
          <p className="mt-2 text-lg text-gray-600">
            คุณกำลังตามหาเกมอยู่ใช่หรือไม่ สำรวจเกมที่เหมาะกับคุณได้ที่นี่!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
          {gameCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="block overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105"
            >
              <div className="relative w-full h-70">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
                <span className="inline-block mt-2 text-blue-600 hover:underline">
                  อ่านเพิ่มเติม
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* News Section */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">ข่าวสารเกมล่าสุด</h2>
        <p className="mb-6 text-center text-gray-600">
          อัปเดตข่าวสารวงการเกม งานอีเวนต์ และการเปิดตัวเกมใหม่.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {newsItems.map((news) => (
            <Link
              key={news.id}
              href={news.href}
              className="block overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{news.title}</h3>
                <p className="text-gray-600">{news.description}</p>
                <span className="inline-block mt-2 text-blue-600 hover:underline">
                  อ่านเพิ่มเติม
                </span>
              </div>
            </Link>
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
                  image: `https://gamehub.com${category.image}`,
                  url: `https://gamehub.com${category.href}`,
                },
              })),
              ...newsItems.map((news, index) => ({
                '@type': 'ListItem',
                position: index + gameCategories.length + 1,
                item: {
                  '@type': 'NewsArticle',
                  name: news.title,
                  description: news.description,
                  image: `https://gamehub.com${news.image}`,
                  url: `https://gamehub.com${news.href}`,
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
                  item: 'https://gamehub.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'เกมยอดนิยม',
                  item: 'https://gamehub.com/popular-games',
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}