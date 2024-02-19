import React from "react";
import ProductTable from "./components/ProductTable";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/utils";

const ProductsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const products = await prismadb.product.findMany({
    include: { images: true, color: true, size: true, category: true },
  });
  return <ProductTable data={products} />;
};

export default ProductsPage;
