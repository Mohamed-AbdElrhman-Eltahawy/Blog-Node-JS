import { Types } from "mongoose";
import { Post } from "../model";

export function loadPostForView(postId: Types.ObjectId | string) {
  return Post.findById(postId).populate("author", "name").lean();
}
