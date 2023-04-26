import { IPostResponse } from "~/types";

export const usePosts = () => {
  const { $axiosPublic } = useNuxtApp();

  const getPostsByUser = async (): Promise<IPostResponse | null> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.get("/posts/user");
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getPostsByUser,
  };
};
