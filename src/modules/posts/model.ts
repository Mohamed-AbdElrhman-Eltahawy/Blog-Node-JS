import mongoose, { Schema } from "mongoose";
import { PostDocument } from "./types";

const PostSchema = new Schema<PostDocument>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },

    image: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },

    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

if (mongoose.models.Post) {
  mongoose.deleteModel("Post");
}

export const Post = mongoose.model<PostDocument>("Post", PostSchema);
