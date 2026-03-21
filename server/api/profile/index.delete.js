import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { _id } = await readBody(event);
  await User.findByIdAndDelete(_id);
});
