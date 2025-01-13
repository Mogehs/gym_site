import express from "express";
import {
  addApplications,
  getAllApplications,
  getApplication,
  updateApplication,
} from "../controllers/applicationsController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const applicationRouter = express.Router();

applicationRouter.route("/send/:id").post(isAuthenticated, addApplications);
applicationRouter.route("/get/:id").get(isAuthenticated, getApplication);
applicationRouter
  .route("/update/:id")
  .patch(isAuthenticated, updateApplication);
applicationRouter.route("/get").get(isAuthenticated, getAllApplications);

export default applicationRouter;
