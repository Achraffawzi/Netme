import { IUserResponse } from "~/types";

export const userTransformer = (user: IUserResponse) => ({
  _id: user._id,
  username: user.username,
  email: user.email,
  picture: user.picture,
  interests: user.interests,
  bio: user.bio,
  createdAt: user.createdAt,
});

export const userTransformerOptions = (
  user: IUserResponse,
  fields: Partial<IUserResponse>[]
) => ({
  ...fields,
});
