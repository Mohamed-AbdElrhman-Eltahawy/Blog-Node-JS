import { paginate } from "../../utils/pagination";
import { Post } from "../model";

export async function listPosts(input: { page?: any; limit?: any }) {
  return paginate({
    model: Post,
    page: input.page,
    limit: input.limit,
    populate: { path: "author", select: "name email" },
    sort: { createdAt: -1 },
  });
}
