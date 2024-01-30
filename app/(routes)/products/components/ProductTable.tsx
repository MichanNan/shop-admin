"use client";

import React from "react";

import TableElement from "@/components/TableElement";
import { Product } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

interface ProductTableProps {
  data: Product[] | null;
}

const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Products" description="Manage your products." />
        <Button onClick={() => router.push("/products/new")}>Add +</Button>
      </div>
      <Separator />
      <TableElement title="products" data={data} />
    </div>
  );
};

export default ProductTable;
