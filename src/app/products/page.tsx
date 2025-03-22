import { prisma, PrismaType } from '@/lib/prisma';
import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';

async function Products () { 

//query
//mutation
// از طریق شی می تونیم به مدل های خود دسترسی داشته باشیم
// و روش کوری هامون بزنیم

  const data: PrismaType.Product[] = await prisma.product.findMany();
  console.log(data);

  return (
    <div>
      <ProductListView/>
    </div>
  )
};

export default Products;
