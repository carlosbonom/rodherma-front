'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    id: 1,
    sku: 'GA001',
    name: 'Guitarra-acustica-1',
    displayName: 'Guitarra acústica 1',
    price: 599.99,
    image: '/images/guitarra-1.jpg',
    description: 'Guitarra acústica profesional con acabados premium'
  },
  {
    id: 2,
    sku: 'GA002',
    name: 'Guitarra-acustica-2',
    displayName: 'Guitarra acústica 2',
    price: 499.99,
    image: '/images/guitarra-2.jpg',
    description: 'Perfecta para principiantes y estudiantes'
  },
  {
    id: 3,
    sku: 'GE001',
    name: 'Guitarra-electroacustica',
    displayName: 'Guitarra electroacústica',
    price: 799.99,
    image: '/images/guitarra-3.jpg',
    description: 'Sonido excepcional con capacidades eléctricas'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Productos Destacados</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.displayName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {product.displayName}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-orange-500">
                    ${product.price.toLocaleString()}
                  </span>
                  <Link 
                    href={`/productos/${product.sku}/${product.name}`}
                    className="relative overflow-hidden px-6 py-2 rounded-full bg-orange-500 text-white font-medium group-hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="relative z-10">Ver detalles</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 