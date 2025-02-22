'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Componente del Modal de Cotización
const QuoteModal = ({ isOpen, onClose, productName }: { isOpen: boolean; onClose: () => void; productName: string }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl w-[90%] max-w-lg flex flex-col max-h-[90vh] mx-4">
              {/* Header fijo */}
              <div className="flex justify-between items-start p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold">Solicitar Cotización</h3>
                  <p className="text-gray-600 mt-2">Completa el formulario para recibir una cotización de {productName}</p>
                </div>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contenido con scroll */}
              <div className="flex-1 overflow-y-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                      placeholder="Ingresa tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                      placeholder="+1 234 567 890"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                </form>
              </div>

              {/* Footer fijo */}
              <div className="border-t p-6">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Enviar Cotización
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Componente de Estrellas para la calificación
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

// Tipo para los parámetros de la página
type Props = {
  params: {
    sku: string;
    name: string;
  };
};

export default function ProductPage({ params }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('descripcion');

  // Aquí normalmente harías una llamada a tu API para obtener los detalles del producto
  // usando params.sku y params.name
  const product = {
    name: 'Guitarra acustica 2',
    price: 999999,
    rating: 5.0,
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    availability: 'Disponible en 30 dias',
    installments: '12 cuotas sin interes',
    maxPerOrder: 'Maximo 2 por pedido',
    images: [
      '/images/guitarra-1.jpg',
      '/images/guitarra-2.jpg',
      '/images/guitarra-3.jpg'
    ],
    characteristics: [
      'Cuerpo de caoba',
      'Diapasón de palisandro',
      'Trastes de níquel',
      'Cuerdas de acero'
    ]
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Modal */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.name}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-500">guitarras</Link>
          <span className="mx-2">&gt;</span>
          <span>Estudio</span>
        </div>
      </div>

      {/* Producto */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Galería de imágenes */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <StarRating rating={product.rating} />
            
            <div className="mt-6">
              <span className="text-4xl font-bold">${product.price.toLocaleString()}</span>
            </div>

            <div className="mt-6 space-y-2 text-indigo-600">
              <p>{product.availability}</p>
              <p>{product.installments}</p>
              <p>{product.maxPerOrder}</p>
            </div>

            <div className="mt-8">
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full btn btn-primary text-lg py-4"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>

        {/* Tabs de información adicional */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              <button
                className={`pb-4 font-medium ${
                  activeTab === 'descripcion'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('descripcion')}
              >
                Descripcion
              </button>
              <button
                className={`pb-4 font-medium ${
                  activeTab === 'caracteristicas'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('caracteristicas')}
              >
                Caracteristicas
              </button>
              <button
                className={`pb-4 font-medium ${
                  activeTab === 'comentarios'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('comentarios')}
              >
                Comentarios
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'descripcion' && (
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'caracteristicas' && (
              <ul className="list-disc pl-5 space-y-2">
                {product.characteristics.map((characteristic, index) => (
                  <li key={index}>{characteristic}</li>
                ))}
              </ul>
            )}
            {activeTab === 'comentarios' && (
              <div>
                <p className="text-gray-600">No hay comentarios todavía.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 