// import { findUserByProp } from "~/server/db/dal/users";
// import { decodeToken } from "~/server/utils/jwt";

// export default defineEventHandler((event) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { access_token } = parseCookies(event);
//       const { _id } = decodeToken(access_token);
//       const user = await findUserByProp("_id", _id);
//       resolve(user);
//     } catch (error) {
//       reject(error);
//     }
//   });
// });

import { decodeToken } from "~/server/utils/jwt";

export default defineEventHandler((event) => {
  console.log("tes");
  return new Promise(async (resolve, reject) => {
    try {
      // const { access_token } = parseCookies(event);
      // const { _id } = decodeToken(access_token);
      // const postsByUser = await findPostsByUserId(_id);

      resolve("test");
    } catch (error) {
      reject(error);
    }
  });
});
