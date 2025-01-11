import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "trainer", "student"],
      default: "student",
      required: true,
    },
    profile: {
      phone: { type: String },
      address: { type: String },
      bio: { type: String },
      certifications: [{ type: String }],
      experience: { type: Number },
      subscriptions: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Subscription" },
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
