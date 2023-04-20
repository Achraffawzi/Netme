import { findFollowsByUserId } from "~/server/db/dal/follows";

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    try {
      const result = findFollowsByUserId(event.context._id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
});
