import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  isVerified: {
    type: String,
    default: false,
  },
  interests: {
    type: Array,
    length: 5,
  },
  otp: {
    type: Number,
  },
});

// Hashing the password before saving the user to DB
userSchema.pre("save", function () {
  if (this.isModified("password") && this.password !== "") {
    console.log("password changed");
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  }
});

export default mongoose.model("user", userSchema);
