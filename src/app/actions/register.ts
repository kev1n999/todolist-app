"use server";

import { connect } from "@/src/config/database";
import { userRegister } from "@/src/services/auth.service";

export async function formRegister(prevState: any, form: FormData) {
  const username = form.get("username") as string;
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const db = await connect();

  try {
    await userRegister(username, email, password);
    return { success: true, error: null, };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "an error ocurred!",
    }
  } finally { if (db) await db.disconnect(); }
}
