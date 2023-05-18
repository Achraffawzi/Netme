import { getPostById } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _id } = event.context.params;

      if (!_id) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "no ID provided",
        });
      }

      const post = await getPostById(_id);
      resolve(post);
    } catch (error) {
      reject(error);
    }
  });
});
