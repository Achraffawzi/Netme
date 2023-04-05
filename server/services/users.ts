import { IUserResponse } from "~/types";
import {
  getUserByUsernameOrEmail,
  findUserByIdAndUpdate,
  findUserByProp,
} from "~/server/db/dal/users";

export const getUserByUsernameOrEmailService = async (
  username: string,
  email: string
): Promise<IUserResponse | null> => {
  const user = await getUserByUsernameOrEmail(username, email);
  return user;
};

export const findUserByIdAndUpdateService = async (
  id: string,
  prop: number
): Promise<IUserResponse | boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await findUserByIdAndUpdate(id, prop);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserByPropService = (
  prop: string,
  value: any
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await findUserByProp(prop, value);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};
