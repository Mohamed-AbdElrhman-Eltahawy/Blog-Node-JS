import { Request, Response } from "express";
import { handleError } from "../../../shared/handle-error";
import { latestPosts } from "../service/list-latest-posts";

export async function latest(req: Request, res: Response) {
  try {
    const result = await latestPosts();
    return res.json(result);
  } catch (error: any) {
    return handleError(res, error);
  }
}
