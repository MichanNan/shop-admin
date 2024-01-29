import React from "react";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email) {
      return new NextResponse("Email is required!", { status: 500 });
    }
    if (!password) {
      return new NextResponse("Password is required!", { status: 500 });
    }

    const userExisted = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExisted?.id) {
      return new NextResponse("User already existed, please sign in!", {
        status: 500,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: { name, email, password: hashedPassword },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("REGISTER_ERROR", error);
  }
}
