import prismadb from "@/lib/prismadb";

export const getTotalOrders = async () => {
  const ordersCount = await prismadb.order.count({
    where: {
      isPaid: true,
    },
  });
  return ordersCount;
};

export const getOrders = async (id: string) => {
  const order = await prismadb.order.findUnique({
    where: { id: id },
    include: {
      orderItems: { include: { product: { include: { images: true } } } },
    },
  });
  return order;
};
