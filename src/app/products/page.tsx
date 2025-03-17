import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';

function Products () { 
  // findMany   یعنی همه پروداکت ها 
// query 
// mutation  یعنی بقیه کارهایی که می خواهم انجان دهم
// mutation  مثل  post یا put یا delete یا patch


  /*   const data: PrismaType.Product[] = await prisma.product.findMany() */
  

  return  
  <div>
    <ProductListView/> 
    <p> add test git for new-feature</p>
  </div>;
};

export default Products;
