"use client";

import React, { useState } from "react";

import TableElement from "@/components/TableElement";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import Pagination from "@/components/Pagination";

interface ProductTableProps {
  data: Product[] | null;
}

const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(10);
  const router = useRouter();
  if (!data) return;

  const paginatedData = data.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Products" description="Manage your products." />
        <Button onClick={() => router.push("/products/new")}>Add +</Button>
      </div>
      <Pagination
        data={data}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        setPageStartIndex={setPageStartIndex}
        setPageEndIndex={setPageEndIndex}
      />
      <TableElement title="products" data={paginatedData} />
    </div>
  );
};

export default ProductTable;
