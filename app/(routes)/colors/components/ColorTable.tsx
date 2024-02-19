"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import { Color } from "@/types";
import Pagination from "@/components/Pagination";

interface ColorTableProps {
  data: Color[] | null;
}

const ColorTable: React.FC<ColorTableProps> = ({ data }) => {
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(10);
  const router = useRouter();
  if (!data) return;

  const paginatedData = data.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Colors" description="Manage your colors." />
        <Button onClick={() => router.push("/colors/new")}>Add +</Button>
      </div>
      <Pagination
        data={data}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        setPageStartIndex={setPageStartIndex}
        setPageEndIndex={setPageEndIndex}
      />
      <TableElement title="colors" data={paginatedData} />
    </div>
  );
};

export default ColorTable;
