import bcrypt from "bcryptjs";
import { User } from "../user/model";
import { mapUserToAuthResult } from "./mapper";
import { LoginInput, RegisterInput } from "./types";

export async function register(data: RegisterInput) {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already is used");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash,
  });

  return mapUserToAuthResult(user);
}

export async function login(data: LoginInput) {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.passwordHash)))
    throw new Error("Invalid credentials");

  return mapUserToAuthResult(user);
}
