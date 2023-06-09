import bcrypt from "bcrypt";
import { findUserByProp } from "~/server/db/dal/users";
import { userTransformer } from "~/server/transformers/user";
import { generateTokens } from "~/server/utils/jwt.js";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await readBody(event);
      if (!body || !body.email || !body.password) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Email and password are required",
        });
      }

      const { email, password } = body;
      // check if email exists
      const user = await findUserByProp("email", email.toLowerCase());
      if (!user) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Wrong Email",
        });
      }

      // check if user is verified
      if (!user.isVerified) {
        return sendError(event, {
          statusCode: 403,
          statusMessage: "Account is not verified",
        });
      }

      // compare password
      if (!bcrypt.compareSync(password, user.password)) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Wrong password",
        });
      }

      // generate tokens (access token & refresh token)
      const { accessToken, refreshToken } = generateTokens(user);

      // save tokens in cookie
      setCookie(event, "access_token", accessToken, {
        maxAge: 604_800,
        sameSite: true,
        httpOnly: true,
      });
      setCookie(event, "refresh_token", refreshToken, {
        maxAge: 31_536_000,
        sameSite: true,
        httpOnly: true,
      });

      // send res
      resolve(userTransformer(user));
    } catch (error) {
      reject(error);
    }
  });
});
