import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./utils/db.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import courseRouter from "./routes/courseRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import subscritpionRouter from "./routes/subscriptionRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

await db();
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/subscription", subscritpionRouter);

app.listen(process.env.PORT, () => {
  console.log("listening at" + process.env.PORT);
});
