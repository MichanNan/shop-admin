"use client";

import { Order } from "@/types";
import { ArrowLeft, Check, XCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface OrderProps {
  order: Order;
}

const OrderDetail: React.FC<OrderProps> = ({ order }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:m-10 w-full">
      <div className="flex items-center gap-6 ml-2 mb-2 md:mb-10 md:ml-0">
        <ArrowLeft
          className="hover:cursor-pointer"
          onClick={() => router.push("/orders")}
        />
        <h1 className="font-bold text-2xl ">Order Details</h1>
      </div>

      <div className=" flex flex-col lg:flex-row gap-10 md:gap-40 w-full ml-4 md:ml-10">
        <div className="flex flex-col gap-10">
          {order.orderItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 md:gap-10"
            >
              <div className="flex">
                <Image
                  src={item.product.images[0].url}
                  alt="product image"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <p className="text-l text-slate-500">Product Details</p>
                <div className="flex gap-4">
                  <span>Product Name:</span>
                  <span>{item.product.name}</span>
                </div>
                <div className="flex gap-4">
                  <span>Amount:</span>
                  <span>{item.amount}</span>
                </div>
                <div className="flex gap-4">
                  <span>Pay:</span>
                  <span>{order.isPaid ? <Check /> : <XCircle />}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-l text-slate-500">Shipping Address</p>
          <div>
            <span>Address:</span>
            <span>{order.address}</span>
          </div>
          <div>
            <span>Receiver:</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone:</span>
            <span>{order.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
