import { decodeToken } from "~/server/utils/jwt";
import { findPostsByUserId } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  console.log("tes");
  return new Promise(async (resolve, reject) => {
    try {
      const { access_token } = parseCookies(event);
      const { _id } = decodeToken(access_token);
      const postsByUser = await findPostsByUserId(_id);

      resolve(postsByUser);
    } catch (error) {
      reject(error);
    }
  });
});
