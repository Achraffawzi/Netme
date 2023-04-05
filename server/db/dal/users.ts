import { IUserResponse } from "~/types";
import Users from "~/server/db/models/users.js";

export const getUserByUsernameOrEmail = (
  username: string,
  email: string
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user: IUserResponse | null = await Users.findOne({
        $or: [{ username }, { email }],
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserByIdAndUpdate = (
  id: string,
  prop: number
): Promise<IUserResponse | boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedUser = await Users.findByIdAndUpdate(id, {
        otp: prop,
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
