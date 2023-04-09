import { IRegisterPayload, IStatusResponse } from "~/types";

export const useAuth = () => {
  const { $axiosPublic } = useNuxtApp();

  const register = async (user: IRegisterPayload): Promise<IStatusResponse> => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      for (let key in user) {
        if (typeof user[key] === "object" && Array.isArray(user[key])) {
          formData.append(key, JSON.stringify(user[key]));
        } else {
          formData.append(key, user[key] as string | Blob);
        }
      }

      const { data } = await $axiosPublic.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      resolve(data);
      try {
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    register,
  };
};
