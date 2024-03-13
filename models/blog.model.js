import { Schema, model } from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    discussion: {
      type: Schema.Types.Array,
      ref: "Discussion",
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model("Blog", blogSchema);
