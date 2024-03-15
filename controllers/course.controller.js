import { Course } from "../models/course.model.js";
export function getAllCourses(req, res) {
  Course.find()
    .sort({ created: -1 })
    .then((result) => res.status(200).json(result))
}

export function getCourse(req, res) {
  Course.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({ error: "Course not found" }));
}
export function createCourse(req, res) {
  const course = new Course(req.body);
  course.save().then((data) => res.status(200).json(data));
}

export function deleteCourse(req, res) {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Deleted a course successfully"))
    .catch(() => res.status(400).json({ error: "Course not found" }));
}
