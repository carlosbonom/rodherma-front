'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
  isPriority?: boolean;
}

export default function ProductCard({ product, isPriority = false }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Obtener arreglo de imágenes único y válido
  const rawImages: string[] = (product.images && product.images.length > 0)
    ? product.images
    : (product.image ? [product.image] : ['/images/placeholder.jpg']);

  const images = Array.from(new Set(rawImages.filter(Boolean)));
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    // Si no está en hover o solo tiene 1 imagen, volver a la primera imagen y detener intervalos
    if (!isHovered || !hasMultipleImages) {
      setCurrentImageIndex(0);
      return;
    }

    // Al poner el cursor: esperar 700ms en la primera imagen y luego ciclar cada 1400ms
    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      intervalId = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1400);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      setCurrentImageIndex(0);
    };
  }, [isHovered, hasMultipleImages, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
    >
      {/* Contenedor de la imagen con transiciones en hover */}
      <div
        className="relative h-[600px] overflow-hidden bg-gray-100 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={`/productos/${product.sku}/${product.name}`}
          className="block w-full h-full relative"
        >
          {images.map((imgSrc, idx) => (
            <div
              key={`${imgSrc}-${idx}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${product.displayName || 'Guitarra'} - imagen ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={isPriority && idx === 0}
              />
            </div>
          ))}
        </Link>

        {/* Indicadores de puntos cuando hay más de una imagen */}
        {hasMultipleImages && (
          <div
            className={`absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-1.5 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(dotIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 shadow focus:outline-none ${
                  dotIdx === currentImageIndex
                    ? 'w-6 bg-orange-500'
                    : 'w-1.5 bg-white/80 hover:bg-white'
                }`}
                aria-label={`Ver imagen ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">
            <Link
              href={`/productos/${product.sku}/${product.name}`}
              className="hover:text-orange-500 transition-colors"
            >
              {product.displayName}
            </Link>
          </h3>
          {product.description && (
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          )}
          {product.features && product.features.length > 0 && (
            <ul className="mb-4 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 mt-auto">
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
  );
}
