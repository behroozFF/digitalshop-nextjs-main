import React from 'react';
import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';

                     /* ProductListView.tsx */
function productList(props: {products: ProductsWithImages[]}) {

  //destructuring
  const {products} = props;
  console.log(products)
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {products.map((item) => {   //بیا حلقه بزن پروداکتس
        return <ProductItem key={item.name} product={item} />;
      })}
    </div> 
  );
}

export default productList;
