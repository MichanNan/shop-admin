import React from "react";
import ProductTable from "./components/ProductTable";
import prismadb from "@/lib/prismadb";

const ProductsPage = async () => {
  const products = await prismadb.product.findMany({
    include: { images: true, color: true, size: true, category: true },
  });
  return <ProductTable data={products} />;
};

export default ProductsPage;
