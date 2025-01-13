import express from "express";
import {
  createSubscription,
  deleteSubscription,
  updateSubscription,
} from "../controllers/subscriptionController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const subscritpionRouter = express.Router();

subscritpionRouter.route("/create").post(isAuthenticated, createSubscription);
subscritpionRouter
  .route("/update/:id")
  .post(isAuthenticated, updateSubscription);
subscritpionRouter
  .route("/delete/:id")
  .delete(isAuthenticated, deleteSubscription);

export default subscritpionRouter;
