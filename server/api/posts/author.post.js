import { findPostsByUserId } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await readBody(event);
      if (!body || body.authorId) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No authorId provided",
        });
      }

      const posts = await findPostsByUserId(body.authorId);

      resolve(posts);
    } catch (error) {
      reject(error);
    }
  });
});
