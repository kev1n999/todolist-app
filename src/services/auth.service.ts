import { User } from "../models/user.model";

export async function userRegister(
  name: string,
  email: string,
  password: string,
) {
  const userExists = await User.findOne({ email: email });
  if (userExists) throw new Error("user already exists!");

  try {
    await User.create({ name: name, email: email, password: password });
  } catch (err) {
    console.error(err);
  }
}
