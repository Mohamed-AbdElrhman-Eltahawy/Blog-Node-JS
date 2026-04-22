import cloudinary from "../../config/cloudinary";
import { UploadedImage } from "./types";

export function uploadImageBuffer(
  buffer: Buffer,
  opts?: { folder?: string }
): Promise<UploadedImage> {
  const folder = opts?.folder ?? "blog/posts";

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (err, result) => {
        if (err || !result) return reject(err);

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
        });
      }
    );

    stream.end(buffer);
  });
}

export async function deleteImage(publicId: string) {
  await cloudinary.uploader.destroy(publicId);
}
