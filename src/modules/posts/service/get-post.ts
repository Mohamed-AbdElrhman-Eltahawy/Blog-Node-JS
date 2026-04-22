import { isValidObjectId } from "mongoose";
import { Post } from "../model";

export async function getPostById(postId: string) {
  if (!isValidObjectId(postId)) {
    throw new Error("Invalid post id");
  }

  const post = await Post.findById(postId)
    .populate({
      path: "author",
      select: "name email",
    })
    .lean();

  if (!post) {
    throw new Error("Post not found");
  }

  return {
    data: {
      ...post,
      author: post.author,
    },
  };
}
