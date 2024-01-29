import React from "react";
import prismadb from "@/lib/prismadb";

import CategoryTable from "./components/CategoryTable";

const Categories = async () => {
  const categories = await prismadb.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <CategoryTable data={categories} />;
};

export default Categories;
