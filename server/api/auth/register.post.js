import formidable from "formidable";
import User from "~/server/db/models/users.js";
import { getUserByUsernameOrEmailService } from "~/server/services/users";
import cloudinary from "cloudinary";
import "~/server/config/cloudinary.js";

export default defineEventHandler((event) => {
  const form = formidable({ multiples: false });

  return new Promise(async (resolve, reject) => {
    // try {
    form.parse(event.node.req, async (err, fields, files) => {
      if (err) {
        reject(err);
      }

      const { username, email, password, interests = [] } = fields;
      if (!username || !email || !password) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Some fields are required",
        });
      }
      // store the image in cloudinary if the file exists in req body
      if (files.picture) {
        if (files.picture.mimetype.startsWith("image/")) {
          // store the image file in cloudinary
          cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
          });

          var cloudinaryResult = await cloudinary.v2.uploader.upload(
            files?.picture?.filepath,
            {
              folder: "users_pictures",
            }
          );
        } else {
          return sendError(event, {
            statusCode: 400,
            statusMessage: "Only images are accepted",
          });
        }
      }

      try {
        // check if email or username already exist
        let user = await getUserByUsernameOrEmailService(username, email);

        if (user) {
          return sendError(event, {
            statusCode: 400,
            statusMessage: "A user with these credentials already exist",
          });
        }

        // creating user
        user = new User({
          username,
          email,
          password,
          interests,
          picture: files ? cloudinaryResult?.url : "",
        });

        // // save user
        var result = await user.save();

        // send verification email

        // send res
        resolve({
          statusCode: 200,
          statusMessage: user,
        });
      } catch (error) {
        if (result) {
          await cloudinary.uploader.destroy(result?.picture?.publicID);
        }
        console.log(error);
        return sendError(event, {
          statusCode: 500,
          statusMessage: "something bad happened",
        });
      }
    });
  });
});
