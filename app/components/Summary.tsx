'use client';

import { motion } from 'framer-motion';

const Summary = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: 'Artesanía Tradicional',
      description: 'Cada guitarra es creada a mano siguiendo técnicas tradicionales españolas.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Calidad Premium',
      description: 'Selección de las mejores maderas y materiales para un sonido excepcional.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'Personalización',
      description: 'Adaptamos cada instrumento a las necesidades específicas del músico.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Satisfacción Total',
      description: 'Garantizamos la calidad y el servicio en cada una de nuestras guitarras.'
    }
  ];

  const stats = [
    { value: '25+', label: 'Años de Experiencia' },
    { value: '500+', label: 'Guitarras Creadas' },
    { value: '100%', label: 'Artesanal' },
    // { value: '50+', label: 'Premios' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/50">
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tradición y Excelencia en Cada Guitarra
          </h2>
          <p className="text-gray-600 text-lg">
            Más de dos décadas creando guitarras artesanales de la más alta calidad, 
            combinando técnicas tradicionales con innovación moderna.
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
                {stat.value}
              </span>
              <span className="text-gray-600">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Características destacadas */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary; 