"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import { Color } from "@prisma/client";
import { Separator } from "@/components/ui/separator";

interface ColorTableProps {
  data: Color[] | null;
}

const ColorTable: React.FC<ColorTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Colors" description="Manage your colors." />
        <Button onClick={() => router.push("/colors/new")}>Add +</Button>
      </div>
      <Separator />
      <TableElement title="colors" data={data} />
    </div>
  );
};

export default ColorTable;
