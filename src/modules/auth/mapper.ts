import { UserDocument } from "../user/types";
import { signAuthToken } from "./token";
import { AuthResult } from "./types";

export function mapUserToAuthResult(user: UserDocument): AuthResult {
  const userId = user._id.toString();

  return {
    user: {
      id: userId,
      name: user.name,
      email: user.email,
    },
    token: signAuthToken(userId),
  };
}
