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
    const size = await prismadb.size.create({
      data: { name },
    });
    return NextResponse.json(size);
  } catch (error) {
    console.log("[SIZE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
