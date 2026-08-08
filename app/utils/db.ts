// app/utils/db.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO;

if (!MONGO_URI) {
  throw new Error("Please add MONGO to your .env file");
}

export default async function Connect() {
  if (mongoose.connections[0].readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI!);
  } catch (err) {
    console.error("MONGO_CONNECT_ERROR:", err);
    throw err;
  }
}