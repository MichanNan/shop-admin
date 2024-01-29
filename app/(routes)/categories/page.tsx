"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import TableElement from "./components/TableElement";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();

  return (
    <div className="md:mt-10 flex flex-col w-full h-[5rem] gap-5">
      <div className=" flex items-center justify-between">
        <Heading title="Categories" description="Manage your categories." />
        <Button onClick={() => router.push(`/categories/new`)}>Add +</Button>
      </div>
      <TableElement />
    </div>
  );
};

export default Categories;
