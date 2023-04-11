import { ILoginPayload, IRegisterPayload, IStatusResponse } from "~/types";

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

      try {
        const { data } = await $axiosPublic.post("/auth/register", formData, {
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

  const verify = async (
    otp: number,
    email: string
  ): Promise<IStatusResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.post("/auth/verify", {
          otp,
          email,
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const forgotPassword = async (email: string): Promise<IStatusResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.post("/auth/forgot-password", {
          email,
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const resetPassword = (
    newPassword: string,
    newPasswordConfirm: string,
    id: string
  ): Promise<IStatusResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.post(
          `/auth/reset-password?_id=${id}`,
          {
            newPassword,
            newPasswordConfirm,
          }
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const login = (payload: ILoginPayload): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await $axiosPublic.post("/auth/login", { ...payload });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    register,
    verify,
    forgotPassword,
    resetPassword,
    login,
  };
};
