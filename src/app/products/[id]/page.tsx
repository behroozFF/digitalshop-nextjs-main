import React from 'react';
import { Data } from '@/modules/products/mocks/products';
import ProductDetail from '@/modules/products/components/ProductDetail';


async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;

  const product = Data[0];
  return (
    <ProductDetail {...product}/>
  )
}

export default page;
