import { decodeToken } from "~/server/utils/jwt";
import { findPostsByUserId } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  console.log("tes");
  return new Promise(async (resolve, reject) => {
    try {
      const postsByUser = await findPostsByUserId(event.context._id);

      resolve(postsByUser);
    } catch (error) {
      reject(error);
    }
  });
});
