import { useUserStore } from "~/store/user";
import { IUserResponse } from "~/types";

export const useUser = () => {
  const userStore = useUserStore();
  const { $axiosPublic } = useNuxtApp();

  const updateUserPicture = (picture: File | null): Promise<IUserResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        const formData = new FormData();
        formData.append("picture", picture || "");

        const { data } = await $axiosPublic.put("/users/picture", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    userStore,
    updateUserPicture,
  };
};
