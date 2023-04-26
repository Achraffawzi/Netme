import { IUserFollows } from "~/types";

export const useFollows = () => {
  const { $axiosPublic } = useNuxtApp();

  const getFollowsByUser = async (): Promise<IUserFollows> => {
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
    getFollowsByUser,
  };
};
