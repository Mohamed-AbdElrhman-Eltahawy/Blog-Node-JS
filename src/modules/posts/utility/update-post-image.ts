import { deleteImage } from "../../uploads/service";
import { uploadPostImage } from "../../uploads/upload-post-image";
import { PostDocument } from "../types";

export async function updatePostImage(
  post: PostDocument,
  imageFile: Express.Multer.File
) {
  const oldPublicId = post.image?.publicId;

  const uploaded = await uploadPostImage(imageFile);

  post.image = {
    url: uploaded.url,
    publicId: uploaded.publicId,
  };

  if (oldPublicId) {
    await deleteImage(oldPublicId).catch(() => {});
  }
}
