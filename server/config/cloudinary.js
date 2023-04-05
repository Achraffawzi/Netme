import { v2 as cloudinary } from "cloudinary";

console.log(process.env.CLOUDINARY_API_KEY);
console.log("gfhfgh");

export default cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
