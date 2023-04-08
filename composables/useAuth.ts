import { IRegisterPayload, IUserResponse } from "~/types";

export const useAuth = () => {
  const login = async (user: IRegisterPayload): Promise<IUserResponse> => {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    login,
  };
};
