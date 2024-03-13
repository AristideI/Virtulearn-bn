import mongoose, { Schema } from "mongoose";

const DiscussionSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Discussion = mongoose.model("Discussion", DiscussionSchema);

export default Discussion;
