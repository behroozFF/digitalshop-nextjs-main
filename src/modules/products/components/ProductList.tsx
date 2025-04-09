import React from 'react';
import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';

                     /* modules/products/components ProductListView.tsx */
function productList(props: {products: ProductsWithImages[]}) {
                                  /* ProductsWithImages از قدرت پریزما استفاده کردم   */

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
