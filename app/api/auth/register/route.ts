import Connect from "@/app/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  await Connect();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return NextResponse.json("User has been created", {
      status: 201,
    });
  } catch (err: unknown) {
    return new NextResponse(
      err instanceof Error ? err.message : "Unknown error",
      { status: 500 },
    );
  }
}

