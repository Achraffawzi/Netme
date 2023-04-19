import { findUserByProp } from "~/server/db/dal/users";
import { userTransformer } from "~/server/transformers/user";
import { decodeToken } from "~/server/utils/jwt";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { access_token } = parseCookies(event);
      const { _id } = decodeToken(access_token);
      const user = await findUserByProp("_id", _id);
      resolve(userTransformer(user));
    } catch (error) {
      reject(error);
    }
  });
});
