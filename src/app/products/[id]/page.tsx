import React from 'react';
import ProductDetail from '@/modules/products/components/ProductDetail';
import { getProductById } from '@/modules/products/services';
import { ProductsWithImages } from '@/types';

async function page({ params }: { params: Promise<{ id: string }> }) {
  // از طریق پارام میاد آیدی میگیر
  const data = await params;

  /* console.log(data) // با توجه به ایدی صفحه ای که باز شده تو پرامت ایدی نشون میده */
 
  const {id} = data;  
                          /* services folder */
  const product = (await getProductById(id)) as ProductsWithImages;
  //const product = Data[0];
  return (
    <ProductDetail {...product}/>
  )
}

export default page;
