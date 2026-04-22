import jwt from "jsonwebtoken";

export function signAuthToken(userId: string): string {
  const JWT_SECRET = process.env.JWT_SECRET as string;

  if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");
  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: "7d" });
}
