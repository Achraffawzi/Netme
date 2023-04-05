import { findUserByIdAndUpdateV2 } from "~/server/db/dal/users";
import {
  findUserByIdAndUpdateService,
  findUserByPropService,
} from "~/server/services/users";

export default defineEventHandler(async (event) => {
  // validate body
  const body = await readBody(event);
  if (!body || !body.otp) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: "No OTP provided",
    });
  }

  // verify otp
  const { otp } = body;

  const user = await findUserByPropService("otp", otp);
  if (!user) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: "OTP is not valid",
    });
  }

  // update isVerified & otp
  await findUserByIdAndUpdateV2(user._id);

  // send res
  return {
    message: "account has been verified",
  };
});
