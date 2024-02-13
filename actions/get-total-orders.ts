import prismadb from "@/lib/prismadb";
import axios from "axios";

export const getTotalOrders = async () => {
  const ordersCount = await prismadb.order.count({
    where: {
      isPaid: true,
    },
  });
  return ordersCount;
};

export const getOrders = async () => {
  const res = await axios.get("http://localhost:3001/api/orders");

  return res.data;
};

export const getOrder = async (orderId: string) => {
  const res = await axios.get(`http://localhost:3001/api/orders/${orderId}`);

  return res.data;
};
