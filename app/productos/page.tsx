'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { categories, guitarSubcategories, products } from '@/app/data/products';

export default function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['todas']);
  const [sortBy, setSortBy] = useState('featured');
  const toggleCategory = (categoryId: string) => {
  if (categoryId === 'todas') {
    setSelectedCategories(['todas']);
    return;
  }

  setSelectedCategories((prev) => {
    const sinTodas = prev.filter((c) => c !== 'todas');
    if (sinTodas.includes(categoryId)) {
      let nuevoResultado = sinTodas.filter((c) => c !== categoryId);
      if (categoryId === 'guitarras') {
        nuevoResultado = nuevoResultado.filter((c) => !guitarSubcategories.includes(c));
      }
      
      return nuevoResultado.length === 0 ? ['todas'] : nuevoResultado;
    } else {
      return [...sinTodas, categoryId];
    }
  });
};

  const filteredProducts = products.filter(product => {
  if (selectedCategories.includes('todas')) return true;
  return selectedCategories.every(catId => product.categories?.includes(catId));
});

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/catalog-hero.jpg"
            alt="Catálogo de Guitarras"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Nuestro Catálogo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Descubre nuestra colección de guitarras artesanales
          </motion.p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((category) => {
                  if (guitarSubcategories.includes(category.id)) {
                    return selectedCategories.includes('guitarras');
                  }
                  return true;
                })
                .map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategories.includes(category.id)
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[600px]">
                  <Image
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.displayName || "Guitarra"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.displayName}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <ul className="mb-4 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ${product.price.toLocaleString()}
                    </span>
                    <Link 
                      href={`/productos/${product.sku}/${product.name}`}
                      className="btn btn-primary"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 