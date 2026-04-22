import { Response } from "express";

export function handleError(res: Response, error: any) {
  const message = error?.message || "Bad request";

  let status = 400;

  switch (message) {
    case "Unauthorized":
      status = 401;
      break;
    case "Forbidden":
      status = 403;
      break;
    case "Post not found":
    case "Not found":
      status = 404;
      break;
    default:
      status = 400;
  }

  return res.status(status).json({ message });
}
