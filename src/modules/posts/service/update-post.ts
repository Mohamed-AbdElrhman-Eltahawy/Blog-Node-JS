import { Post } from "../model";
import { UpdatePost } from "../types";
import { loadPostForView } from "../utility/load-post";
import { pickUpdates } from "../utility/pick-updates";
import { updatePostImage } from "../utility/update-post-image";

export async function updatePost(input: UpdatePost) {
  const { postId, userId, imageFile } = input;

  const post = await Post.findById(postId);

  if (!post) throw new Error("Post not found");

  if (post.author?.toString() !== userId) throw new Error("Forbidden");

  const updates = pickUpdates(input);

  Object.assign(post, updates);

  if (imageFile) {
    await updatePostImage(post, imageFile);
  }

  await post.save();

  return loadPostForView(post._id);
}
