import React from "react";
import OrderTable from "./components/OrderTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getOrders } from "@/actions/get-total-orders";
import { Order } from "@/types";

const Orders = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const orders = await getOrders();

  return <OrderTable data={orders} />;
};

export default Orders;
