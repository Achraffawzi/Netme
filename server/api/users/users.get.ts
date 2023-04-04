import Users from "../../db/models/users";

export default defineEventHandler(async (event) => {
  return await Users.find();
});
