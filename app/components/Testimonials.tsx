'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Músico Profesional',
    image: '/images/testimonial-1.jpg',
    content: 'La calidad de las guitarras es excepcional. El servicio y asesoramiento que recibí fue fundamental para encontrar el instrumento perfecto para mi estilo.'
  },
  {
    id: 2,
    name: 'Ana María López',
    role: 'Estudiante de Música',
    image: '/images/testimonial-2.jpg',
    content: 'Como principiante, encontrar la guitarra adecuada era crucial. El equipo me ayudó a elegir un instrumento que se ajusta a mi nivel y presupuesto.'
  },
  {
    id: 3,
    name: 'Miguel Ángel Torres',
    role: 'Profesor de Guitarra',
    image: '/images/testimonial-3.jpg',
    content: 'La variedad de guitarras y la experiencia de compra son inmejorables. Mis alumnos siempre reciben las mejores recomendaciones.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >
          <span className="section-subtitle text-sm sm:text-base">Testimonios</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Lo que dicen nuestros clientes</h2>
          <div className="section-title-line"></div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{testimonial.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 
