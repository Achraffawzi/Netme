import { getUserByUsernameOrEmailService } from "~/server/services/users";
import { userTransformer } from "~/server/transformers/user.js";
import { generateTokenLink } from "~/server/utils/jwt";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await readBody(event);
      if (!body || !body.email) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No email provided",
        });
      }

      const { email } = body;

      // check if email exist
      const user = await getUserByUsernameOrEmailService(undefined, email);
      if (!user) {
        return sendError(event, {
          statusCode: 403,
          statusMessage: "No user with the Email provided",
        });
      }

      // generate token link
      const tokenLink = generateTokenLink(user);

      // Send reset password email
      await sendResetPasswordEmail(user, tokenLink);

      //  send res
      resolve({
        statusCode: 200,
        statusMessage: "We've sent a password reset link to your Email",
      });
    } catch (error) {
      reject(error);
    }
  });
});
