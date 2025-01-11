import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    trainers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
