import { Post } from "../model";

const LATEST_POSTS_LIMIT = 5;

export async function latestPosts() {
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .limit(LATEST_POSTS_LIMIT)
    .populate("author", "name")
    .lean();

  return {
    data: posts,
    meta: {
      limit: LATEST_POSTS_LIMIT,
      sort: "createdAt_desc",
    },
  };
}
