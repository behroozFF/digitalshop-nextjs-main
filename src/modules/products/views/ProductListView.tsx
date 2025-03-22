'use client';
//  با این سناریو این سرور فانکشن کمپوننت به  کلاینت فانکشن کمپوننت  تبدیل کردم 
// از طریق هوک  useEffect
// و از طریق کلاینت فانکشن کامپوننت به پرامیس دسترسی پیدا می کنم
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProductsAPI } from '../services';
import { ProductsWithImages } from '@/types';
// 
 function ProductListView() {

  // ([]);  it means initial value of products is an empty array
  const [products, setProducts] = useState<ProductsWithImages[]>([]);
// بیا برای من تابعی کال کن  که بتونم دیتا هام  بریزم داخل اون استیت  

const getProductsData = async () => {
  const result = await getProductsAPI();
  setProducts(result?.data);
}

// بیا برای من تابعه ای کال کن که بتونم دیتا هام بریزم توی اون استیت
  useEffect(() => {
    getProductsData()
  }, [])

  //const products = getProducts();

  return (
              
    <div>       {/* props in ProductList.tsx */} {/* مقداری که گرفتم بهش پاس می دم */}
      <ProductList products={products} /> 
    </div>
  );
}

export default ProductListView;
