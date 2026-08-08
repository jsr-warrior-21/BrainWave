// app/api/posts/route.ts
import { NextResponse } from "next/server";
import Connect from "@/app/utils/db";
import Post from "@/models/Post";

export async function GET(request:Request) {
  try {
    await Connect();
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
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
