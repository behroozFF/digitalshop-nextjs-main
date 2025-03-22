import { Prisma } from "@prisma/client";

// ProductsWithImages  نام تایپی که من خودم تعریف کردم  
// ProductGetPayload  یک تایپ جنریک هست 
export type ProductsWithImages = Prisma.ProductGetPayload<{include: {images: true}}>  