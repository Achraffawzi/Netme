import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
  {
    followerId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
    followingId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Follow", followSchema);
