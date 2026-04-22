import { Request, Response } from "express";
import { handleError } from "../../../shared/handle-error";
import * as postsService from "../service/list-posts";

export async function list(req: Request, res: Response) {
  try {
    const result = await postsService.listPosts({
      page: req.query.page,
      limit: req.query.limit,
    });

    return res.json(result);
  } catch (error: any) {
    return handleError(res, error);
  }
}
