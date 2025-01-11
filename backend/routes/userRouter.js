import express from "express";

import {
  login,
  logout,
  signup,
  userProfile,
} from "../controllers/userControllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/update/profile").put(isAuthenticated, userProfile);

userRouter.route("/logout").get(logout);

export default userRouter;
