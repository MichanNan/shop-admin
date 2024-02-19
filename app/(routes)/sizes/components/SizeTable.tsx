"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import TableElement from "@/components/TableElement";
import { Size } from "@/types";
import Pagination from "@/components/Pagination";

interface SizeTableProps {
  data: Size[] | null;
}

const SizeTable: React.FC<SizeTableProps> = ({ data }) => {
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(10);
  const router = useRouter();
  if (!data) return;

  const paginatedData = data.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Sizes" description="Manage your sizes." />
        <Button onClick={() => router.push("/sizes/new")}>Add +</Button>
      </div>
      <Pagination
        data={data}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        setPageStartIndex={setPageStartIndex}
        setPageEndIndex={setPageEndIndex}
      />
      <TableElement title="sizes" data={paginatedData} />
    </div>
  );
};

export default SizeTable;
