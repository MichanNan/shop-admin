import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product id is required!");
    }

    const product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: { images: true, color: true, size: true, category: true },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("PEODUCT_GET", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
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
    console.log("body", body);
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
    if (!params.productId) {
      return new NextResponse("Product id is reuqired!", { status: 400 });
    }

    await prismadb.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name,
        price: price.toString(),
        categoryId,
        colorId,
        sizeId,
        images: { deleteMany: {} },
        isFeatured,
        isArchived,
      },
    });

    const product = await prismadb.product.update({
      where: {
        id: params.productId,
      },
      data: {
        images: {
          createMany: {
            data: [...images],
          },
        },
      },
    });
    console.log("product", product);

    return NextResponse.json(product);
  } catch (error) {
    console.log("[COLOR_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Size id is required!");
    }

    const product = await prismadb.product.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
