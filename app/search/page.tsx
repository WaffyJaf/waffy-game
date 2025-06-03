"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

// ข้อมูลหมวดหมู่เกมและข่าว
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

const newsItems = [
  {
    id: 'news-1',
    title: 'แนะนำคีย์บอร์ด Blue Switch และ Red Switch ราคาสบายกระเป๋า',
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

// คอมโพเนนต์สำหรับส่วนการค้นหาที่ใช้ useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<(typeof gameCategories[0] | typeof newsItems[0])[]>([]);

  useEffect(() => {
    const q = searchParams.get('q')?.toLowerCase() || '';
    setQuery(q);

    if (q) {
      const filteredResults = [
        ...gameCategories.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
        ...newsItems.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      ];
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchParams]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(0, 221, 235, 0.7)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen px-4 pt-20 pb-8 mx-auto bg-[#1E2527] text-white max-w-7xl">
      {/* SEO Meta Tags */}
      <Head>
        <title>{query ? `ค้นหา ${query} - WaffyGame` : 'ค้นหา - WaffyGame'}</title>
        <meta
          name="description"
          content={
            query
              ? `ค้นหาเกมและบทความเกี่ยวกับ ${query} บน WaffyGame พบกับเกมยอดนิยมและข้อมูลล่าสุด`
              : 'ค้นหาเกมและบทความบน WaffyGame พบกับเกมยอดนิยมและข้อมูลล่าสุด'
          }
        />
      </Head>

      <h1 className="mb-8 text-3xl font-bold text-[#00DDEB] font-prompt">
        ผลลัพธ์การค้นหา: {query || 'ไม่มีคำค้นหา'}
      </h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link
                href={item.href}
                className="block overflow-hidden bg-[#2A3234] rounded-2xl border border-[#00DDEB]/20 hover:border-[#00DDEB] transition-all duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-opacity duration-300 opacity-90 hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2527]/80 to-transparent" />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-semibold text-[#00DDEB] font-prompt">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 font-prompt">{item.description}</p>
                  <span className="inline-block mt-3 px-4 py-2 text-[#00DDEB] bg-[#1E2527]/50 rounded-full hover:bg-[#00DDEB]/20 transition-all duration-300">
                    อ่านเพิ่มเติม
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-300 font-prompt">
          ไม่พบผลลัพธ์สำหรับ {query || 'ไม่มีคำค้นหา'}. ลองใช้คำค้นหาอื่น
        </p>
      )}
    </div>
  );
}

// คอมโพเนนต์หลักที่ห่อด้วย Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#1E2527] text-white">กำลังโหลด...</div>}>
      <SearchContent />
    </Suspense>
  );
}