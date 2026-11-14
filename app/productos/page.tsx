'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { categories, guitarSubcategories, products } from '@/app/data/products';
import ProductCard from '@/app/components/ProductCard';

function CatalogContent() {
  const searchParams = useSearchParams();

  const getInitialCategories = () => {
    const rawParams = searchParams.getAll('categoria').concat(searchParams.getAll('categorias'));
    const parsed = rawParams
      .flatMap((p) => p.split(','))
      .map((s) => s.trim())
      .filter((s) => categories.some((c) => c.id === s));

    return parsed.length > 0 ? parsed : ['todas'];
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>(getInitialCategories);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const rawParams = searchParams.getAll('categoria').concat(searchParams.getAll('categorias'));
    const parsed = rawParams
      .flatMap((p) => p.split(','))
      .map((s) => s.trim())
      .filter((s) => categories.some((c) => c.id === s));

    if (parsed.length > 0) {
      setSelectedCategories(parsed);
    } else {
      setSelectedCategories(['todas']);
    }
  }, [searchParams]);

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
            {sortedProducts.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-500 mb-4">No se encontraron productos con los filtros seleccionados.</p>
                <button
                  onClick={() => setSelectedCategories(['todas'])}
                  className="btn btn-primary"
                >
                  Ver todos los productos
                </button>
              </div>
            ) : (
              sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isPriority={index < 3}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24" />}>
      <CatalogContent />
    </Suspense>
  );
}
