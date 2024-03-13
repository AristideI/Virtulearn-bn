import Discussion from "../models/discussion.model.js";


// create a new discussion
export async function create(req, res) {
  res.json({ message: "Welcome to the discussion route" });
}

// like a discussion
export async function likeDiscussion(req, res) {
  res.json({ message: "Welcome to the discussion route" });
}
