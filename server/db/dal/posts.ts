import { IPostResponse } from "~/types";
import Posts from "~/server/db/models/posts.js";

export const findPostsByUserId = (id: string): Promise<IPostResponse[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const posts: any = await Posts.find({ authorId: id }).populate({
        path: "authorId",
        select: "_id username picture",
      });
      resolve(posts);
    } catch (error) {
      reject(error);
    }
  });
};

export const getPostsByTag = (tag: string): Promise<IPostResponse | null> => {
  return new Promise((resolve, reject) => {
    try {
      const posts: any = Posts.find({
        tags: { $in: [tag] },
      }).populate({
        path: "authorId",
        select: "_id username picture",
      });
      resolve(posts);
    } catch (error) {
      reject(error);
    }
  });
};

export const getPostById = (id: string): Promise<IPostResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const post: Awaited<ReturnType<typeof getPostById>> =
        await Posts.findById(id).populate("authorId", "_id username picture");
      resolve(post);
    } catch (error) {
      reject(error);
    }
  });
};
