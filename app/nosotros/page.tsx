'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Sobre Nosotros"
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
            El Arte de Crear Guitarras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-3xl mx-auto font-light"
          >
            Más de dos décadas perfeccionando el arte de la luthería, 
            creando instrumentos únicos que dan vida a la música
          </motion.p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-orange-500 font-medium text-lg">Nuestra Historia</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">Una Tradición de Excelencia</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Desde nuestros humildes comienzos en un pequeño taller hace más de 10 años, 
              nos hemos dedicado a la artesanía de guitarras de alta calidad. Nuestra pasión 
              por la música y el compromiso con la excelencia nos han permitido crecer y 
              convertirnos en un referente en la industria de instrumentos musicales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maestro Luthier */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/luthier-work.jpg"
                alt="Maestro Luthier trabajando"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-orange-500 font-medium text-lg">Maestría Artesanal</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">El Arte de la Luthería</h2>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  En RodherMa, cada guitarra es una obra maestra única, creada con pasión y 
                  dedicación por nuestro maestro luthier. Con más de dos décadas de experiencia 
                  en el arte de la luthería, combinamos técnicas tradicionales españolas con 
                  innovaciones modernas para crear instrumentos excepcionales.
                </p>
                
                <p className="text-lg">
                  Nuestro proceso artesanal incluye la selección minuciosa de las mejores maderas, 
                  un secado natural que puede llevar años, y técnicas de construcción que han sido 
                  perfeccionadas durante generaciones. Cada detalle, desde el diseño de la roseta 
                  hasta el acabado final, recibe una atención meticulosa.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Servicios Especializados</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Restauración de guitarras
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ajustes profesionales
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Personalización
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mantenimiento
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <span className="text-4xl font-bold text-orange-500 block mb-1">25+</span>
                  <span className="text-sm text-gray-600">Años de<br/>Experiencia</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <span className="text-4xl font-bold text-orange-500 block mb-1">500+</span>
                  <span className="text-sm text-gray-600">Guitarras<br/>Creadas</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <span className="text-4xl font-bold text-orange-500 block mb-1">100%</span>
                  <span className="text-sm text-gray-600">Artesanal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Listo para encontrar tu guitarra perfecta?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Descubre nuestra colección de guitarras artesanales y encuentra el 
              instrumento que resonará con tu estilo musical.
            </p>
            <Link 
              href="/productos"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Ver Catálogo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 