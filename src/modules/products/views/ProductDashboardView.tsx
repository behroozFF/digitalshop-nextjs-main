import React from 'react';
import ProductTable from '../components/ProductTable';
import { getProducts } from '../services';

async function ProductDashboardView() {
                  // modules/services/index.tsx
  const products = getProducts();
  
  return (
    <div>       {/* props */}
      <ProductTable  products={products}/>
    </div> 
  );
}

export default ProductDashboardView;
