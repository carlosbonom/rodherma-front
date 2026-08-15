'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/app/data/products';

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

type ProductClientProps = {
  sku: string;
};

export default function ProductClient({ sku }: ProductClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('descripcion');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomPosition({ x: 50, y: 50 });
  };

// Buscamos el instrumento en la lista usando el SKU recibido
  const foundProduct = products.find((p) => p.sku === sku);

  // Si el SKU no coincide con ningún producto
  if (!foundProduct) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Producto no encontrado</h1>
        <p className="text-gray-500 mt-2">El código SKU "{sku}" no existe.</p>
        <Link href="/productos" className="text-orange-500 underline mt-4 inline-block">
          Volver a la tienda
        </Link>
      </div>
    );
  }

// Mapeamos los datos reales del producto
  const product = {
    name: foundProduct.name,
    price: foundProduct.price,
    rating: 5.0,
    description: foundProduct.description || 'Instrumento de alta calidad fabricado por Rodherma.',
    availability: 'Disponible para entrega o despacho',
    installments: 'Hasta 12 cuotas sin interés',
    maxPerOrder: 'Máximo 2 por pedido',
    // Usamos foundProduct.image en un arreglo para mantener compatibilidad con la galería
    images: foundProduct.images || [foundProduct.image],
    characteristics: foundProduct.features && foundProduct.features.length > 0 
      ? foundProduct.features 
      : [
          'Garantía oficial Rodherma',
          'Afinación y calibración de fábrica',
          'Apta para músicos principiantes y avanzados'
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
          {/* Galería de imágenes con Zoom */}
          <div className="space-y-4">
            <div 
              className="aspect-[4/5] sm:aspect-square relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/70 p-4 flex items-center justify-center cursor-crosshair select-none group shadow-sm"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="w-full h-full relative transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                }}
              >
                <Image
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-2 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Badge indicador de zoom activo */}
              {isZoomed && (
                <div className="absolute top-3 left-3 bg-orange-500/95 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md pointer-events-none backdrop-blur-sm flex items-center gap-1.5 z-10 animate-fade-in">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Zoom 2.5x</span>
                </div>
              )}

              {/* Badge de ayuda al pasar el cursor */}
              <div 
                className={`absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-200/60 flex items-center gap-1.5 pointer-events-none transition-opacity duration-200 z-10 ${
                  isZoomed ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>Pasa el cursor para ampliar</span>
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all bg-gray-50 p-1 flex items-center justify-center ${
                      selectedImage === index 
                        ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-sm' 
                        : 'border-gray-200 hover:border-gray-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 25vw, 15vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del producto */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <StarRating rating={product.rating} />
            
            <div className="mt-6">
              <span className="text-4xl font-bold">${product.price.toLocaleString('es-CL')}</span>
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