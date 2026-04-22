import { Response } from "express";
import { AuthRequest } from "../../../middlewares/requireAuth";
import { handleError } from "../../../shared/handle-error";
import { updatePost } from "../service/update-post";

export async function update(req: AuthRequest, res: Response) {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const post = await updatePost({
      postId: req.params.id,
      userId: req.userId,
      ...req.body,
      imageFile: req.file,
    });

    return res.json({
      message: "Post updated successfully",
      data: post,
    });
  } catch (error: any) {
    return handleError(res, error);
  }
}
