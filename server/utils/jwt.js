import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process?.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1w",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user._id }, process?.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "1y",
  });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken,
    refreshToken,
  };
};
