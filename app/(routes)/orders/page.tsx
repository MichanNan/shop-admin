import React from "react";
import prismadb from "@/lib/prismadb";
import OrderTable from "./components/OrderTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Orders = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const orders = await prismadb.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <OrderTable data={orders} />;
};

export default Orders;
