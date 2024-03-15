import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
} from "../controllers/course.controller.js"

const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.post("/", createCourse);
router.delete("/:id", deleteCourse);
export default router;
