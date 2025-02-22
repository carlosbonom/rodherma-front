'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    name: 'Categoría 01',
    title: 'Guitarras Clásicas',
    image: '/images/categoria-01.jpg',
    description: 'Guitarras españolas de alta calidad'
  },
  {
    id: 2,
    name: 'Categoría 02',
    title: 'Guitarras Portuguesas',
    image: '/images/categoria-02.jpg',
    description: 'Auténticas guitarras portuguesas'
  },
  {
    id: 3,
    name: 'Categoría 03',
    title: 'Guitarras Folk',
    image: '/images/categoria-03.jpg',
    description: 'Guitarras acústicas estilo folk'
  },
  {
    id: 4,
    name: 'Categoría 04',
    title: 'Guitarras Electroacústicas',
    image: '/images/categoria-04.jpg',
    description: 'Guitarras con pastilla incorporada'
  }
];

const Categories = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          Nuestras Categorías
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              <div className="relative w-full h-[200px] sm:h-[280px] rounded-2xl sm:rounded-[2rem] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-500/30 to-gray-900/70 group-hover:from-gray-500/40 group-hover:to-gray-900/80 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
                  <p className="text-xs sm:text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 