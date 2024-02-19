import React from "react";
import OrderTable from "./components/OrderTable";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getOrders } from "@/actions/get-total-orders";
import { authOptions } from "@/lib/utils";

const Orders = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const orders = await getOrders();

  return <OrderTable data={orders} />;
};

export default Orders;
