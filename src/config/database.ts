import mongoose from "mongoose";
import { env } from "./env";

export async function connect() {
  try {
    const database = await mongoose.connect(env.MongoURI, { dbName: "auth-system" });
    console.log("connected!");
    return database;
  } catch (err) {
    console.error("an error ocurred to connect with mongoose:\n" + err);
  }
}
