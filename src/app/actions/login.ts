"use server";

import { cookies } from "next/headers";
import { connect } from "@/src/config/database";
import { userLogin } from "@/src/services/auth.service";

export async function formLogin(prevState: any, form: FormData) {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const db = await connect();

  try {
    const token = await userLogin(email, password);
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });
    return { success: true, error: null, }
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "an error ocurred!"}
  } finally { if(db) await db.disconnect(); }
}
