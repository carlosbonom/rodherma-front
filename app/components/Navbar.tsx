'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  // { label: 'Trabajos', href: '/trabajos' },
  { label: 'Nosotros', href: '/nosotros' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isHome ? (
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      ) : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/api-portafolio-f576a.appspot.com/o/Rodherma%2Fimage.png?alt=media&token=ba8debf2-f754-4c21-be40-389fbbff2c71"
              alt="RodherMa"
              width={40}
              height={40}
              className="w-auto h-8 sm:h-10"
            />
            {/* <span className={`ml-2 font-bold text-lg sm:text-xl ${
              isHome ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'
            }`}>
              RodherMa
            </span> */}
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isHome ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
              isHome ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'
            }`}
          >
            <span className={`w-6 h-0.5 transition-all transform ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            } ${isHome ? (isScrolled ? 'bg-gray-900' : 'bg-white') : 'bg-gray-900'}`} />
            <span className={`w-6 h-0.5 transition-all ${
              isOpen ? 'opacity-0' : 'opacity-100'
            } ${isHome ? (isScrolled ? 'bg-gray-900' : 'bg-white') : 'bg-gray-900'}`} />
            <span className={`w-6 h-0.5 transition-all transform ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            } ${isHome ? (isScrolled ? 'bg-gray-900' : 'bg-white') : 'bg-gray-900'}`} />
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 text-sm font-medium hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 