export const userTransformer = (user) => ({
  _id: user._id,
  username: user.username,
  email: user.email,
  picture: user.picture,
  interests: user.interests,
});
