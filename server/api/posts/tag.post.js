import { getPostsByTag } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, rejrect) => {
    try {
      const body = await readBody(event);
      if (!body || !body.interest) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No interest provided",
        });
      }

      const posts = await getPostsByTag(body.interest);
      resolve(posts);
    } catch (error) {
      rejrect(error);
    }
  });
});
