import { getTotalLikesByPostId } from "~/server/db/dal/likes";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { postId } = event.context.params;
      if (!postId) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No post id provided",
        });
      }

      const totalLikes = await getTotalLikesByPostId(postId);
      resolve(totalLikes);
      console.log(postId);
    } catch (error) {
      reject(error);
    }
  });
});
