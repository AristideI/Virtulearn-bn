import Content from "../models/content.model.js";
import Course from "../models/course.model.js";

export async function getAllCourses(req, res) {
  try {
    const courses = await Course.find()
      .populate("authorId")
      .populate("content")
      .populate("students")
      .sort({ created: -1 });
    return res.status(200).json(courses);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
}

export async function getCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id)
      .populate("authorId")
      .populate("content")
      .populate("students");
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
}

export async function createCourse(req, res) {
  try {
    const authorId = req.user._id;
    const { coverImage, content } = req.body;
    const course = await Course.create({ authorId, coverImage });
    const contents = await Content.insertMany(content);
    course.content = contents.map((content) => content._id);
    course.save();
    return res.status(201).json(course);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
}

export async function deleteCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    await course.remove();
    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
}
