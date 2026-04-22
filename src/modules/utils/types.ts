import { Model, PopulateOptions } from "mongoose";

export type MongooseFindFilter<TDoc> = Parameters<Model<TDoc>["find"]>[0];

export type PaginationInfo = {
  total: number;
  page: number;
  limit: number;
  pages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type ListResponse<T> = {
  data: T[];
  paginationInfo: PaginationInfo;
  meta?: Record<string, any>;
};

export type PaginateInput<TDoc> = {
  model: Model<TDoc>;
  page?: number;
  limit?: number;
  maxLimit?: number;

  filter?: MongooseFindFilter<TDoc>;
  sort?: Record<string, 1 | -1>;
  select?: string;
  populate?: string | PopulateOptions | (string | PopulateOptions)[];
  meta?: Record<string, any>;
};
