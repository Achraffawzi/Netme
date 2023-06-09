import mongoose from "mongoose";

const dislikeSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Post",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Dislike", dislikeSchema);
