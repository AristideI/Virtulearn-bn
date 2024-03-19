import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

import blogRouter from "./routes/blog.routes.js"

import contentRouter from "./routes/content.routes.js";
import courseRouter from './routes/course.routes.js'
import userRouter from "./routes/user.routes.js";
import discussionRouter from "./routes/discussion.routes.js";
import validateToken from "./guards/validateToken.js";

// config Consts
const app = express();

// Config
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  console.log("sample");
  return res.status(200).json({ done: true });
});

//  auth routes
app.use("/auth", authRouter);
app.use("/blogs",blogRouter)
app.use("/content", contentRouter);
app.use("/course",courseRouter)

//  users routes
app.use("/users", validateToken, userRouter);

//  discussion routes
app.use("/discussions", validateToken, discussionRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  connectDB();
});
