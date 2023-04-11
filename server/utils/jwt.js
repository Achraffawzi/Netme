import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign({ _id: user._id }, process?.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1w",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ _id: user._id }, process?.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "1y",
  });
};

const generateToken = (user) => {
  return jwt.sign({ _id: user._id }, process?.env.JWT_TOKEN_SECRET, {
    expiresIn: "30d",
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

export const generateTokenLink = (user) => {
  const token = generateToken(user);
  const tokenLink = `${process.env.API_URL}/auth/reset-password/${token}`;

  return tokenLink;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process?.env.JWT_TOKEN_SECRET);
  } catch (error) {
    throw {
      statusCode: 400,
      statusMessage: "Invalid token",
    };
  }
};
