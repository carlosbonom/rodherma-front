import { FC } from 'react';

interface ProductClientProps {
  params: {
    sku: string;
    name: string;
  };
}

declare const ProductClient: FC<ProductClientProps>;
export default ProductClient; 