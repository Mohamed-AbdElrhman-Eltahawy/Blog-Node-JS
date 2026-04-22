import { deleteImage } from "../../uploads/service";
import { Post } from "../model";

export async function deletePost(postId: string, userId: string) {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  if (post.author.toString() !== userId) {
    throw new Error("Forbidden");
  }

  const publicId = post.image?.publicId;

  await post.deleteOne();

  if (publicId) {
    try {
      await deleteImage(publicId);
    } catch (err) {
      console.error("Failed to delete image from Cloudinary:", publicId, err);
    }
  }
}
