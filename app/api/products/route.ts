import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const session = getServerSession();
    if (!session) {
      return new NextResponse("Please login first!");
    }
    const body = await req.json();

    const {
      name,
      images,
      price,
      categoryId,
      sizeId,
      colorId,
      isFeatured,
      isArchived,
    } = body;

    if (!name) {
      return new NextResponse("Name is reuqired!", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Images are reuqired!", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is reuqired!", { status: 400 });
    }
    if (!categoryId) {
      return new NextResponse("Category id is reuqired!", { status: 400 });
    }

    if (!sizeId) {
      return new NextResponse("Size id is reuqired!", { status: 400 });
    }
    if (!colorId) {
      return new NextResponse("Color id is reuqired!", { status: 400 });
    }

    const product = await prismadb.product.create({
      data: {
        name,
        price: price.toString(),
        categoryId,
        colorId,
        sizeId,
        isFeatured,
        isArchived,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
