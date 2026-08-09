// app/api/posts/route.ts
import { NextResponse } from "next/server";
import Connect from "@/app/utils/db";
import Post from "@/models/Post";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    await Connect();
    const post = await Post.findById(id);
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("POSTS_API_ERROR:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    await Connect();
    await Post.findByIdAndDelete(id);
    return NextResponse.json("Post has been deleted", { status: 200 });
  } catch (error) {
    console.error("POSTS_API_ERROR:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
