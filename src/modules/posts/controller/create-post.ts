import { Response } from "express";
import { AuthRequest } from "../../../middlewares/requireAuth";
import { handleError } from "../../../shared/handle-error";
import { createPost } from "../service/create-post";

export async function create(req: AuthRequest, res: Response) {
  if (!req.userId) return res.status(401).json({ message: "Unauthorized" });
  if (!req.file) return res.status(400).json({ message: "image is required" });

  try {
    const post = await createPost({
      ...req.body,
      imageFile: req.file,
      author: req.userId,
    });

    return res.status(201).json({
      message: "Post created successfully",
      data: post,
    });
  } catch (error: any) {
    return handleError(res, error);
  }
}
