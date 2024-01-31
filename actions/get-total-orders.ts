import prismadb from "@/lib/prismadb";

export const getTotalOrders = async () => {
  const ordersCount = await prismadb.order.count({
    where: {
      isPaid: true,
    },
  });
  return ordersCount;
};
