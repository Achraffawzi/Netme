import { getPostsByTags } from "~/server/db/dal/posts";

export default defineEventHandler((event) => {
  console.log("started");
  return new Promise(async (resolve, rejrect) => {
    try {
      const body = await readBody(event);
      if (!body || !body.interests) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No interests provided",
        });
      }

      const posts = await getPostsByTags(body.interests);
      resolve(posts);
    } catch (error) {
      rejrect(error);
    }
  });
});
