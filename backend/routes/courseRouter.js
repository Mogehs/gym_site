import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseControllers.js";

const courseRouter = express.Router();

courseRouter.route("/create").post(createCourse);
courseRouter.route("/get").post(getAllCourses);

export default courseRouter;
