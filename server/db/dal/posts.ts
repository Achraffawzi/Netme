import { IPostResponse } from "~/types";
import Post from "~/server/db/models/posts.js";

export const findPostsByUserId = (
  id: string
): Promise<IPostResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const posts: any = await Post.find({ authorId: id });
      resolve(posts);
    } catch (error) {
      reject(error);
    }
  });
};
