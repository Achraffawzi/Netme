import { IRegisterPayload, IUserResponse } from "~/types";

export const useAuth = () => {
  const { $axiosPublic } = useNuxtApp();

  const register = async (user: IRegisterPayload): Promise<IUserResponse> => {
    return new Promise(async (resolve, reject) => {
      const { data } = await $axiosPublic.post("/auth/register", { ...user });
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
