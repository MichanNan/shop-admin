import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const orders = await prismadb.order.findMany({
      include: {
        orderItems: { include: { product: { include: { images: true } } } },
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
