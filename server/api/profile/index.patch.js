import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { _id: userId, password, ...updateData } = await readBody(event);

  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  }).select("-password");

  if (!user) throw createError({ statusCode: 404 });
  return { user };
});
