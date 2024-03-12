import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import discussionRouter from "./routes/discussion.routes.js";

// config Consts
const app = express();

// Config
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("sample");
  return res.status(200).json({ done: true });
});

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/discussion", discussionRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  connectDB();
});
