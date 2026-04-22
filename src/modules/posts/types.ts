import { Types } from "mongoose";

export type PostImage = {
  url: string;
  publicId: string;
};

export type CreatePostInput = {
  title: string;
  content: string;
  image: PostImage;
  author: Types.ObjectId;
};

export interface PostDocument {
  _id: Types.ObjectId;
  title: string;
  content: string;
  image: PostImage;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePost = {
  title: string;
  content: string;
  imageFile: Express.Multer.File;
  author: string;
};

export type UpdatePost = {
  postId: string;
  userId: string;
  title?: string;
  content?: string;
  imageFile?: Express.Multer.File;
};
