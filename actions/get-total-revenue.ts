import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async () => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const totalOrder = order.orderItems.reduce((orderSum, item) => {
      return orderSum + parseInt(item.product.price);
    }, 0);

    return total + totalOrder;
  }, 0);

  return totalRevenue;
};
