import { Suspense } from 'react';
import { Metadata } from 'next';
import ProductClient from './ProductClient';

type Props = {
  params: Promise<{
    sku: string;
    name: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `${resolvedParams.name} | RodherMa`,
    description: `Detalles del producto ${resolvedParams.name}`,
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ProductClient params={resolvedParams} />
    </Suspense>
  );
} 