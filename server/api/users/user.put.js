// import formidable from "formidable";
import { findUserByIdAndUpdateProps } from "~/server/db/dal/users";

export default defineEventHandler((event) => {
  // const form = formidable({ multiples: false });
  return new Promise(async (resolve, reject) => {
    try {
      const body = await readBody(event);

      if (!body) {
        return sendError(event, {
          statusCode: 400,
          statusMessage: "No data provided",
        });
      }

      const props = [];
      const values = [];
      for (let [key, value] of Object.entries(body)) {
        props.push(key);
        values.push(value);
      }

      const res = await findUserByIdAndUpdateProps(
        event.context._id,
        props,
        values
      );
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
});
