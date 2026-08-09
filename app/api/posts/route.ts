// app/api/posts/route.ts
import { NextResponse } from "next/server";
import Connect from "@/app/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await Connect();
    const filter = username ? { username } : {};
    const posts = await Post.find(filter);
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

export async function POST(request: Request) {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await Connect();
    await newPost.save();

    return NextResponse.json("post created successfully", { status: 201 });
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
