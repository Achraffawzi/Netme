import cloudinary from "cloudinary";
import "~/server/config/cloudinary.js";

export const upload = (file, folderName) => {
  return new Promise(async (resolve, reject) => {
    try {
      // store the image file in cloudinary
      cloudinary.v2.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      var cloudinaryResult = await cloudinary.v2.uploader.upload(
        file?.picture?.filepath,
        {
          folder: folderName,
        }
      );

      resolve(cloudinaryResult);
    } catch (error) {
      reject(error);
    }
  });
};
