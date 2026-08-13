import { Suspense } from 'react';
import { Metadata } from 'next';
import ProductClient from './ProductClient';

type Props = {
  params: Promise<{
    sku: string;
    name: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  // Limpia la URL para el título (ej: "guitarra-clasica" -> "guitarra clasica")
  const decodedName = decodeURIComponent(resolvedParams.name).replace(/-/g, ' ');

  return {
    title: `${decodedName} | RodherMa`,
    description: `Detalles del producto ${decodedName}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;

  return (
    <Suspense fallback={<div className="p-10 text-center">Cargando producto...</div>}>
      {/* Le pasamos directamente el SKU a tu cliente */}
      <ProductClient sku={resolvedParams.sku} />
    </Suspense>
  );
}