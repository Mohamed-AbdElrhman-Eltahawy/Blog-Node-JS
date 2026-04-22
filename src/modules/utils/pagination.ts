import { ListResponse, MongooseFindFilter, PaginateInput } from "./types";

export async function paginate<TDoc>({
  model,
  page = 1,
  limit = 10,
  maxLimit = 50,
  filter = {} as MongooseFindFilter<TDoc>,
  sort = { createdAt: -1 },
  meta,
}: PaginateInput<TDoc>): Promise<ListResponse<any>> {
  const safePage = Math.max(1, Number(page));
  const safeLimit = Math.min(maxLimit, Math.max(1, Number(limit)));
  const skip = (safePage - 1) * safeLimit;

  const query = model.find(filter).sort(sort).skip(skip).limit(safeLimit);

  const [rows, total] = await Promise.all([
    query.lean(),
    model.countDocuments(filter as any),
  ]);

  const pages = Math.max(1, Math.ceil(total / safeLimit));

  return {
    data: rows,
    paginationInfo: {
      total,
      page: safePage,
      limit: safeLimit,
      pages,
      hasNext: safePage < pages,
      hasPrev: safePage > 1,
    },
    meta,
  };
}
