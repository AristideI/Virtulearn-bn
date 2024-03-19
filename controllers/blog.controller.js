import { Blog } from "../models/blog.model.js";
export function getAllBlogs(req, res) {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    });
}

export function getBlog(req, res) {
  Blog.findById(req.params.id)
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch(() => {
      res.status(404).json({error:'Blog not found'})
    });
}
export function createBlog(req, res) {
  const blog = new Blog(req.body);
  blog.save().then((data) => {
    res.status(200).json(data);
  });
}
export function deleteBlog(req, res) {
  Blog.findByIdAndDelete(req.params.id).then((result) => {
    res.status(200).json("Deleted a blog successfully");
    
  }).catch(err=>{
    console.log(err)
    res.status(404).json({error: "Blog not found"})
  })
}
