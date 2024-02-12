import OrderDetail from "@/components/OrderDetail";

import React from "react";

import { getOrders } from "@/actions/get-total-orders";

interface OrderItemProps {
  params: { orderId: string };
}

const OrderItem: React.FC<OrderItemProps> = async ({ params }) => {
  const order = await getOrders(params.orderId);
  if (!order) return;

  return <OrderDetail order={order} />;
};

export default OrderItem;
