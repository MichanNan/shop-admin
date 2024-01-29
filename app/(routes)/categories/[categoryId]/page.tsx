import React from "react";
import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/CategoryForm";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  let category;
  if (params.categoryId === "new") {
    category = null;
  } else {
    category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  }

  return (
    <div className="w-full">
      <CategoryForm initialData={category} />
    </div>
  );
};

export default CategoryPage;
