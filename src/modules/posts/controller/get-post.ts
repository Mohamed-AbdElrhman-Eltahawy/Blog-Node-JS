import { Request, Response } from "express";
import { handleError } from "../../../shared/handle-error";
import * as getPostService from "../service/get-post";

export async function get(req: Request, res: Response) {
  try {
    const result = await getPostService.getPostById(req.params.id);
    return res.json(result);
  } catch (error: any) {
    return handleError(res, error);
  }
}
