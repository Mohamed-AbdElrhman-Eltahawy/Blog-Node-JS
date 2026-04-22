import { UpdatePost } from "../types";

const ALLOWED_FIELDS: (keyof Omit<
  UpdatePost,
  "postId" | "userId" | "imageFile"
>)[] = ["title", "content"];

export function pickUpdates(input: UpdatePost) {
  const updates: Record<string, any> = {};

  for (const key of ALLOWED_FIELDS) {
    const value = input[key];
    if (value !== undefined) updates[key] = value;
  }

  return updates;
}
