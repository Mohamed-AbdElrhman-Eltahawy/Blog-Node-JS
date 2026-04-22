import { Document } from "mongoose";

export interface UserDocument extends Document {
  name?: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
