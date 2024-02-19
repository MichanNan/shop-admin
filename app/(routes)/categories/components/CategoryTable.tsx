"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import Pagination from "@/components/Pagination";
import { Category } from "@/types";

interface CategoryTableProps {
  data: Category[] | null;
}

const CategoryTable: React.FC<CategoryTableProps> = ({ data }) => {
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(10);
  const router = useRouter();
  if (!data) return;
  console.log(data);

  const paginatedData = data.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Categories" description="Manage your categories." />
        <Button onClick={() => router.push("/categories/new")}>Add +</Button>
      </div>
      <Pagination
        data={data}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        setPageStartIndex={setPageStartIndex}
        setPageEndIndex={setPageEndIndex}
      />
      <TableElement data={paginatedData} title="categories" />
    </div>
  );
};

export default CategoryTable;
