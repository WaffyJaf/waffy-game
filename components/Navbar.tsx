"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 p-6 text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">WaffyGame</Link>
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
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
            <Link href="/" className="transition-colors hover:text-blue-400">
              หน้าแรก
            </Link>
          </li>
          {/* <li>
            <Link href="/pc-specs" className="transition-colors hover:text-blue-400">
              สเปคคอมเล่นเกม
            </Link>
          </li> */}
          {/* <li>
            <Link href="/news" className="transition-colors hover:text-blue-400">
              ข่าวสารเกม
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className="transition-colors hover:text-blue-400">
              ติดต่อเรา
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 w-full bg-gray-800 shadow-lg md:hidden top-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-lg transition-colors hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  href="/pc-specs"
                  className="text-lg transition-colors hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  สเปคคอมเล่นเกม
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-lg transition-colors hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  ข่าวสารเกม
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg transition-colors hover:text-blue-400"
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