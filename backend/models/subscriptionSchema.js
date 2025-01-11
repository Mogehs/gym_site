import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ["active", "expired"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
