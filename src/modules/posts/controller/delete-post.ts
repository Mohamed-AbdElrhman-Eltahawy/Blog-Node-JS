import { Response } from "express";
import { AuthRequest } from "../../../middlewares/requireAuth";
import { handleError } from "../../../shared/handle-error";
import { deletePost } from "../service";

export async function remove(req: AuthRequest, res: Response) {
  if (!req.userId) return res.status(401).json({ message: "Unauthorized" });
  try {
    await deletePost(req.params.id, req.userId);

    return res.json({
      message: "Post deleted successfully",
      data: { id: req.params.id },
    });
  } catch (error: any) {
    return handleError(res, error);
  }
}
