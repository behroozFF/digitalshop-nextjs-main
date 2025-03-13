import React from 'react';
import { Data } from '../mocks/products';
import ProductItem from './ProductItem';


function productList() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {Data.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
