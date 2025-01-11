import express from "express";
import { createCourse, getCourses } from "../controllers/courseControllers.js";

const courseRouter = express.Router();

courseRouter.route("/create").post(createCourse);
courseRouter.route("/get").post(getCourses);

export default courseRouter;
