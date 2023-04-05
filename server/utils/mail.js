import nodemailer from "nodemailer";

export const sendVerificationEmail = (user) => {
  return new Promise((resolve, reject) => {
    try {
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // generate OTP
      const otp = Math.floor(1000 + Math.random() * 9000);

      // send email
      const mailOptions = {
        from: process.env.EMAIL,
        to: `<${user.email}>`,
        subject: "Account verification",
        html: `Use this OTP <b>${otp}</b> to confirm your account.`,
      };

      // Sending the email
      transport.sendMail(mailOptions, (err, data) => {
        if (err) {
          reject(new nodemailer.SendMailError(err));
        } else {
          console.log("email has been sent successfully");
          resolve(otp);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
