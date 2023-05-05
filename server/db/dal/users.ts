import { IUserResponse } from "~/types";
import Users from "~/server/db/models/users.js";

export const getUserByUsernameOrEmail = (
  username: string | undefined,
  email: string | undefined
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

export const findUserByProp = (
  prop: string,
  value: any
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user: IUserResponse | null = await Users.findOne({
        [prop]: value,
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserByidAndUpdateProp = (
  id: string,
  prop: any,
  value: any
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user: IUserResponse | null = await Users.findByIdAndUpdate(id, {
        [prop]: value,
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserByEmailAndOtpDal = (
  email: string,
  otp: number
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user: IUserResponse | null = await Users.findOne({
        $and: [{ email }, { otp }],
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserByIdAndUpdateV2 = (id: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await Users.findByIdAndUpdate(id, {
        isVerified: true,
        $unset: {
          otp: "",
        },
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateUserPicture = (
  id: string,
  picture?: string
): Promise<IUserResponse | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      // const user = await findUserByProp('_id', id);
      // if(!user) {
      //   reject(false);
      // }

      const updatedUser: Awaited<ReturnType<typeof updateUserPicture>> =
        await Users.findByIdAndUpdate(
          id,
          {
            picture: picture ? picture : null,
          },
          {
            new: true,
          }
        );

      resolve(updatedUser);
    } catch (error) {
      reject(error);
    }
  });
};
