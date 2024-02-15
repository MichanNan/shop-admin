"use client";

import React, { useState } from "react";

import { Heading } from "@/components/ui/heading";
import TableElement from "@/components/TableElement";

import Pagination from "@/components/Pagination";
import { Order } from "@/types";

interface OrderTableProps {
  data: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ data }) => {
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(10);

  if (!data) return;

  const paginatedData = data.slice(pageStartIndex, pageEndIndex);
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Orders" description="Check your orders." />
      </div>

      <Pagination
        data={data}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        setPageStartIndex={setPageStartIndex}
        setPageEndIndex={setPageEndIndex}
      />
      <TableElement title="orders" data={paginatedData} />
    </div>
  );
};

export default OrderTable;
