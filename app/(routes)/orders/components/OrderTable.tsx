"use client";

import React from "react";

import { Heading } from "@/components/ui/heading";
import TableElement from "@/components/TableElement";
import { Order } from "@prisma/client";
import { Separator } from "@/components/ui/separator";

interface OrderTableProps {
  data: Order[] | null;
}

const OrderTable: React.FC<OrderTableProps> = ({ data }) => {
  return (
    <div className="md:mt-10 flex flex-col w-full gap-5 ">
      <div className=" flex items-center justify-between">
        <Heading title="Orders" description="Check your orders." />
      </div>
      <Separator />
      <TableElement title="orders" data={data} />
    </div>
  );
};

export default OrderTable;
