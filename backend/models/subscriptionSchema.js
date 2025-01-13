import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, //is koo remover kerna hai iski zaroort nhi hai
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    price: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    //period time add kerna hai start or end date subscription k uper depend kerta hai
    status: { type: String, enum: ["active", "expired"], default: "active" },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
