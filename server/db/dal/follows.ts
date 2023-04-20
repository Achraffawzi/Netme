import Follow from "../models/follows.js";

export const findFollowsByUserId = (id: string): any => {
  return new Promise(async (resolve, reject) => {
    try {
      const followers = await Follow.count({
        followingId: id,
      });

      const following = await Follow.count({
        followerId: id,
      });

      resolve({
        followers,
        following,
      });
    } catch (error) {
      reject(error);
    }
  });
};
