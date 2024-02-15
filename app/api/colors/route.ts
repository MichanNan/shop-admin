import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  try {
    const colors = await prismadb.color.findMany({});
    return NextResponse.json(colors);
  } catch (error) {
    console.log("[COLOR_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

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
    const color = await prismadb.color.create({
      data: { name },
    });
    return NextResponse.json(color);
  } catch (error) {
    console.log("[COLOR_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
