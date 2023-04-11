import { verifyToken } from "~/server/utils/jwt";

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    try {
      // check token in req
      const { token } = event.context.params;
      if (!token) {
        sendError(event, {
          statusCode: 400,
          statusMessage: "No token provided",
        });
      }

      // verify token
      const paylaod = verifyToken(token);
      if (!paylaod) {
        sendError(event, {
          statusCode: 400,
          statusMessage: "Invalid token",
        });
      }
      console.log(paylaod);

      // redirect to password reset client route
      resolve(true);
      return sendRedirect(
        event,
        `${process?.env.BASE_URL}/auth/reset-password?_id=${paylaod._id}`
      );
    } catch (error) {
      reject(error);
    }
  });
});
