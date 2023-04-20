import { findUserByProp } from "~/server/db/dal/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await findUserByProp("_id", event.context._id);
      resolve(userTransformer(user));
    } catch (error) {
      reject(error);
    }
  });
});
