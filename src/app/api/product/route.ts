// handle REST API route  GET, POST, PUT, DELETE
//  module/product/views/ProductListView  چرا این روت ساختیم برای کلاینت فانکشن کمپوننت  فولدر 
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(reg:NextRequest, res:NextResponse) {

    console.log(reg);
   //get action by prisma
    const result = await prisma.product.findMany({include: {images: true,},});  
    
    return NextResponse.json({  
      //object
        data: result
    });
    
 
    
}