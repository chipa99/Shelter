import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { _id: favorite, action, userId } = await readBody(event);
  const operation =
    action === "add" ? { $push: { favorite } } : { $pull: { favorite } };

  return await User.findByIdAndUpdate(userId, operation, { new: true }).select(
    "-password",
  );
});
