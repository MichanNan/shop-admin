import React from "react";
import prismadb from "@/lib/prismadb";
import OrderTable from "./components/OrderTable";

const Orders = async () => {
  const orders = await prismadb.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <OrderTable data={orders} />;
};

export default Orders;
