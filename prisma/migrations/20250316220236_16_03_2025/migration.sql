-- CreateEnum
CREATE TYPE "productCategory" AS ENUM ('MOBILE', 'LAPTOP', 'WATCH', 'OTHERS');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "productCategory" NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION DEFAULT 0.0,
    "quantity" INTEGER DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
