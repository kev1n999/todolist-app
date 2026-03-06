"use server";
import { connect } from "@/src/config/database";
import { userRegister } from "@/src/services/auth.service";

export async function formRegister(form: FormData) {
  const username = form.get("username") as string;
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const db = await connect();
  await userRegister(username, email, password);
  if (db) await db.disconnect();
}
