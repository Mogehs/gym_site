import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./utils/db.js";

const app = express();
dotenv.config();

await db();
app.use(cors());

app.listen(2000, () => {
  console.log("listening at 2000");
});

// "mongodb://127.0.0.1:27017/gym_site"
