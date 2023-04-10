import {
  findUserByIdAndUpdateV2,
  findUserByEmailAndOtpDal,
} from "~/server/db/dal/users";
import {
  findUserByPropService,
  findUserByPropsService,
} from "~/server/services/users";

export default defineEventHandler(async (event) => {
  // validate body
  const body = await readBody(event);
  if (!body || !body.otp || !body.email) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: "No OTP or email provided",
    });
  }

  // verify otp
  const { otp, email } = body;

  // const user = await findUserByPropService("otp", otp);
  const user = await findUserByEmailAndOtpDal(email, otp);
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
    statusCode: 200,
    statusMessage: "account has been verified",
  };
});
