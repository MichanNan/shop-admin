import React from "react";
import prismadb from "@/lib/prismadb";
import ProductForm from "./components/ProductForm";

const Product = async ({ params }: { params: { productId: string } }) => {
  let product;
  if (params.productId === "new") {
    product = null;
  } else {
    product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });
  }

  const categories = await prismadb.category.findMany();

  const sizes = await prismadb.size.findMany();

  const colors = await prismadb.color.findMany();

  return (
    <div>
      <ProductForm
        initialData={product}
        categories={categories}
        sizes={sizes}
        colors={colors}
      />
    </div>
  );
};

export default Product;
