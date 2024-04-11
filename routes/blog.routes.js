import { Router } from "express";
import {
  getAllBlogs,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
