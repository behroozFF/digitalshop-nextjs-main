import { prisma } from "@/lib/prisma"
// findUnique equal findFirst



            /* ProductListView.tsx */
/* export const getProducts = async () => {

   const result = await prisma.product.findMany({include: {images: true,},});  
   console.log(result);
   return result;
}  */

            /* api/product/route.ts */
export const getProductsAPI = async () => {
const result = await fetch('/api/product', {method:'GET'});
const response = await result.json();
//console.log(response)
return response;

}

            /* products/[id] folder */ 
export const getProductById = async (id: string) => {
const result = await prisma.product.findFirst({where: {id}, include: {images: true}})

if(!result){  // if result not exist
   return null;
}

return result;
};


