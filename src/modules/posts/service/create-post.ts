import { uploadPostImage } from "../../uploads/upload-post-image";
import { Post } from "../model";
import { CreatePost } from "../types";
import { loadPostForView } from "../utility/load-post";

export async function createPost(input: CreatePost) {
  const { imageFile, ...postData } = input;

  const image = await uploadPostImage(imageFile);

  const createdPost = await Post.create({
    ...postData,
    image: {
      url: image.url,
      publicId: image.publicId,
    },
  });

  return loadPostForView(createdPost._id);
}
