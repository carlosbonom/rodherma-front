import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rodherma - Guitarras de Calidad',
  description: 'Tu tienda de guitarras de confianza',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/api-portafolio-f576a.appspot.com/o/Rodherma%2Ffavicon.png?alt=media&token=c4ab53d7-01b5-4393-a8bd-cfe6b4ab58f3',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/api-portafolio-f576a.appspot.com/o/Rodherma%2Ffavicon.png?alt=media&token=c4ab53d7-01b5-4393-a8bd-cfe6b4ab58f3',
    apple: 'https://firebasestorage.googleapis.com/v0/b/api-portafolio-f576a.appspot.com/o/Rodherma%2Ffavicon.png?alt=media&token=c4ab53d7-01b5-4393-a8bd-cfe6b4ab58f3',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="light">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
