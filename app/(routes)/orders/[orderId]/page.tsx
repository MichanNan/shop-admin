import OrderDetail from "@/app/(routes)/orders/[orderId]/components/OrderDetail";

import React from "react";

import { getOrder } from "@/actions/get-total-orders";

interface OrderItemProps {
  params: { orderId: string };
}

const OrderItem: React.FC<OrderItemProps> = async ({ params }) => {
  const order = await getOrder(params.orderId);
  if (!order) return;
  console.log(order);
  return <OrderDetail order={order} />;
};

export default OrderItem;
