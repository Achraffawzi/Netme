import { IUserResponse } from "~/types";
import { getUserByUsernameOrEmail } from "~/server/db/dal/users";

export const getUserByUsernameOrEmailService = async (
  username: string,
  email: string
): Promise<IUserResponse | null> => {
  const user = await getUserByUsernameOrEmail(username, email);
  return user;
};
