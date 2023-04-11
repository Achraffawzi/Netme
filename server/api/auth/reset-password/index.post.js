import {
  findUserByIdAndUpdate,
  findUserByProp,
  findUserByidAndUpdateProp,
} from "~/server/db/dal/users";

export default defineEventHandler((event) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check the body & query string
      const { _id } = getQuery(event);
      const body = await readBody(event);

      if (!_id || !body || !body.newPassword || !body.newPasswordConfirm) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Passwords are required",
        });
      }

      const { newPassword, newPasswordConfirm } = body;
      // check passwords match
      if (newPassword !== newPasswordConfirm) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "Passwords don't match",
        });
      }

      // check if user exists
      const user = await findUserByProp("_id", _id);
      if (!user) {
        return sendError(event, {
          statusCode: 404,
          statusMessage: "No user found",
        });
      }

      // hash password
      const hashedPassword = user.hashPassword(newPassword);

      // update password
      await findUserByidAndUpdateProp(user._id, "password", hashedPassword);
      // send res
      resolve({
        statusCode: 200,
        statusMessage: "Password updated",
      });
    } catch (error) {
      reject(error);
    }
  });
});
