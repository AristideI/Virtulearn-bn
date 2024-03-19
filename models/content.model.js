import { Schema, model } from "mongoose";

const contentSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Content = model("Content", contentSchema);

export default Content;
