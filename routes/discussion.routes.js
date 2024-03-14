import express from "express";
import {
  create,
  likeDiscussion,
} from "../controllers/discussion.controller.js";

const router = express.Router();

//create a new discussion
router.post("/", create);

//like a discussion
router.post("/:id/like", likeDiscussion);

export default router;
