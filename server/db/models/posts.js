import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    tags: {
      type: Array,
      length: 5,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
    readingSpan: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("post", postSchema);
