import { findFollowsByUserId } from "~/server/db/dal/follows";

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    try {
      const result = findFollowsByUserId(event.context._id);
      // resolve(result);
      resolve({
        followers: 42000000,
        following: 4500,
      });
    } catch (error) {
      reject(error);
    }
  });
});
