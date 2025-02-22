'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/api-portafolio-f576a.appspot.com/o/Rodherma%2Fimage%20(1).png?alt=media&token=cccac8c1-a913-4834-aa94-b5f38559c5eb"
                alt="RodherMa Logo"
                width={300}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-sm">
              Tu tienda de confianza para encontrar las mejores guitarras y accesorios musicales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogo" className="hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base">Ciudad, País</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm sm:text-base">contacto@rodherma.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm sm:text-base">+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <p className="text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} RodherMa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 