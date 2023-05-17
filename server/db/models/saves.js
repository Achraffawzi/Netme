import mongoose from "mongoose";

const saveSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Post",
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Save", saveSchema);
