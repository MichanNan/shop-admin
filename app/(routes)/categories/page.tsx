import React from "react";
import prismadb from "@/lib/prismadb";

import CategoryTable from "./components/CategoryTable";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Categories = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const categories = await prismadb.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <CategoryTable data={categories} />;
};

export default Categories;
