"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import { Category } from "@prisma/client";
import { Separator } from "@/components/ui/separator";

interface CategoryTableProps {
  data: Category[] | null;
}

const CategoryTable: React.FC<CategoryTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Categories" description="Manage your categories." />
        <Button onClick={() => router.push("/categories/new")}>Add +</Button>
      </div>
      <Separator />
      <TableElement data={data} />
    </div>
  );
};

export default CategoryTable;
