import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export async function userRegister(
  name: string,
  email: string,
  password: string,
): Promise<void> {
  const userExists = await User.findOne({ email: email });
  if (userExists) throw new Error("User already exists!");
  const hashed = await bcrypt.hash(password, 10);
  try {
    await User.create({ name: name, email: email, password: hashed });
  } catch (err) {
    console.error(err);
  }
}

export async function userLogin(
  email: string,
  password: string,
) {
  const userExists = await User.findOne({ email });
  if (!userExists) throw new Error("User do not exists!");
  const isValidPassword = await bcrypt.compare(password, userExists.password);
  if (!isValidPassword) throw new Error("The password is incorrect!");
  const token = jwt.sign({ id: userExists._id }, env.JWT_SECRET, { expiresIn: "7d" });
  return token;
}
