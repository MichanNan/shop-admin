import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { productIds, clientEmail } = body;
    const client = await prismadb.client.findFirst({
      where: { email: clientEmail },
    });
    // model Order {
    //   id String @id @default(auto()) @map("_id") @db.ObjectId
    //   orderItem OrderItem[]
    //   clientId String @db.ObjectId
    //   client Client @relation (fields: [clientId], references: [id])
    //   isPaid Boolean
    //   phone String @default("")
    //   address String @default("")
    //   createdAt DateTime @default(now())
    //   updatedAt DateTime @default(now())

    // }

    // const order = await prismadb.order.create({
    //   data: {
    //     isPaid: false,
    //     clientId: client?.id,
    //     orderItems: {
    //       create: productIds.map((productId: string) => ({
    //         product: {
    //           connect: {
    //             id: productId,
    //           },
    //         },
    //       })),
    //     },
    //   },
    //   include: {
    //     orderItems: true, // 确保在创建订单后将其相关的订单项返回
    //   },
    // });

    // model OrderItem {
    //   id String @id @default(auto()) @map("_id") @db.ObjectId
    //   orderId String @db.ObjectId
    //   order Order @relation(fields: [orderId], references: [id])
    //   productId String @db.ObjectId
    //   product Product @relation(fields: [productId],references: [id])

    //   @@index([orderId])
    //   @@index([productId])
    //  }

    if (client?.id) {
      const order = await prismadb.order.create({
        data: {
          isPaid: false,
          clientId: client?.id,
          orderItems: {
            create: productIds.map((productId: string) => ({
              product: {
                connect: {
                  id: productId,
                },
              },
            })),
          },
        },
        include: { orderItems: true },
      });
    }
    return NextResponse.json({
      headers: corsHeaders,
    });
  } catch (error) {
    console.log("CHECKOUT_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
