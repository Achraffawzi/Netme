import formidable from "formidable";
import { updateUserPicture } from "~/server/db/dal/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler((event) => {
  const form = formidable({ multiples: false });
  return new Promise(async (resolve, reject) => {
    form.parse(event.node.req, async (err, _, files) => {
      if (err) {
        reject(err);
      }
      // store the image in cloudinary if the file exists in req body
      if (files.picture && files.picture.mimetype.startsWith("image/")) {
        try {
          var cloudinaryResult = await upload(files, "users_pictures");
          console.log(cloudinaryResult);
        } catch (error) {
          reject(error);
        }
      } else if (
        files.picture &&
        !files.picture.mimetype.startsWith("image/")
      ) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Only images are accepted",
        });
      }
      try {
        const result = await updateUserPicture(
          event.context._id,
          cloudinaryResult?.url
        );
        resolve(userTransformer(result));
      } catch (error) {
        reject(error);
      }
    });
  });
});
