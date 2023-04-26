import { IUserFollows } from "~/types";

export const usePosts = () => {
  const { $axiosPublic } = useNuxtApp();

  const getPostsByUser = async (): Promise<IUserFollows> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.get("/follows/user");
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
