import Likes from "~/server/db/models/likes";

export const getTotalLikesByPostId = (postId: string): Promise<number> => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalLikes = await Likes.count({ postId });
      resolve(totalLikes);
    } catch (error) {
      reject(error);
    }
  });
};
