import { Document, Schema, model, models } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
});

export const User = models.User || model<User>("User", userSchema);
