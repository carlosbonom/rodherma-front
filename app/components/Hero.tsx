'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: '/images/hero-bg.jpg',
    title: 'Guitarras Acústicas',
    subtitle: 'CALIDAD Y TRADICIÓN',
    description: 'Descubre nuestra colección de guitarras acústicas de alta calidad. Desde principiantes hasta profesionales, tenemos el instrumento perfecto para ti.',
  },
  {
    id: 2,
    image: '/images/guitarra-1.jpg',
    title: 'Guitarras Clásicas',
    subtitle: 'SONIDO AUTÉNTICO',
    description: 'Explora nuestra selección de guitarras clásicas españolas. Sonido auténtico y calidad excepcional para los amantes de la música tradicional.',
  },
  {
    id: 3,
    image: '/images/guitarra-2.jpg',
    title: 'Guitarras Electroacústicas',
    subtitle: 'LO MEJOR DE AMBOS MUNDOS',
    description: 'Combina lo mejor de ambos mundos con nuestras guitarras electroacústicas. Versatilidad y calidad sonora en un solo instrumento.',
  },
];

const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              </div>
              
              <div className="relative container h-full flex flex-col items-start justify-center text-white px-4 sm:px-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="section-subtitle !text-[--primary] !mb-2 sm:!mb-4"
                >
                  {slide.subtitle}
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 max-w-3xl"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="section-description !text-gray-200 !mt-0 mb-6 sm:mb-8 text-sm sm:text-base"
                >
                  {slide.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                >
                  <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base">
                    Ver Catálogo
                  </button>
                  <button className="btn btn-outline !border-white !text-white hover:!bg-white hover:!text-gray-900 w-full sm:w-auto text-sm sm:text-base">
                    Más Información
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-prev !hidden md:!flex"></div>
        <div className="swiper-button-next !hidden md:!flex"></div>
      </Swiper>
    </section>
  );
};

export default Hero; 