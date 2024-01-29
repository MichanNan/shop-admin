"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import { Size } from "@prisma/client";
import { Separator } from "@/components/ui/separator";

interface SizeTableProps {
  data: Size[] | null;
}

const SizeTable: React.FC<SizeTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Sizes" description="Manage your sizes." />
        <Button onClick={() => router.push("/sizes/new")}>Add +</Button>
      </div>
      <Separator />
      <TableElement title="sizes" data={data} />
    </div>
  );
};

export default SizeTable;
