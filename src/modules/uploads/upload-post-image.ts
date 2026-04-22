import { uploadImageBuffer } from "./service";

export async function uploadPostImage(file: Express.Multer.File) {
  return uploadImageBuffer(file.buffer, {
    folder: "blog/posts",
  });
}
