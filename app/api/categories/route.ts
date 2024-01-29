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

    const { name } = body;
    if (!name) {
      return new NextResponse("Name is required!", { status: 400 });
    }
    const category = await prismadb.category.create({
      data: { name },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST]", error);
  }
}
