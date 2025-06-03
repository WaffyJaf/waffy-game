"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      alert('กรุณาใส่คำค้นหา');
    }
  };

  return (
    <nav className="fixed top-0 px-10 left-0 w-full z-50 text-white bg-[#000000]/80 backdrop-blur-md shadow-[0_0_10px_rgba(0,221,235,0.3)]">
      <div className="flex items-center justify-between mx-auto ontainer">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/banner/logo_waffy.png"
              alt="WaffyGame Logo"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="items-center flex-1 hidden max-w-md mx-4 md:flex ml-200">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาเกมหรือบทความ..."
              className="w-full px-4 py-2 text-gray-300 bg-[#2A3234]/80 border border-[#00DDEB]/30 rounded-full focus:outline-none focus:border-[#00DDEB] transition-all duration-300 font-prompt placeholder-gray-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 text-[#00DDEB]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 md:flex md:space-x-8">
          <li>
            <Link href="/" className="font-prompt text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300">
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-prompt text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300">
              ติดต่อเรา
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 w-full bg-[#2A3234]/95 shadow-[0_0_10px_rgba(0,221,235,0.3)] md:hidden top-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4">
              <form onSubmit={handleSearch} className="relative w-full mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาเกมหรือบทความ..."
                  className="w-full px-4 py-2 text-gray-300 bg-[#1E2527]/80 border border-[#00DDEB]/30 rounded-full focus:outline-none focus:border-[#00DDEB] transition-all duration-300 font-prompt placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-lg font-prompt text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg font-prompt text-[#00DDEB] hover:text-[#FF007A] transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;