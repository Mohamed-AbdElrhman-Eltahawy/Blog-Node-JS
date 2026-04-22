import { model, Schema } from "mongoose";
import { UserDocument } from "./types";

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model<UserDocument>("User", userSchema);
