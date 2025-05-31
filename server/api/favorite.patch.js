import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const { _id: favorite, action, userId } = await readBody(event);
    console.log(action);
    const updateOperation =
      action == "add" ? { $push: { favorite } } : { $pull: { favorite } };
    const user = await User.findByIdAndUpdate(userId, updateOperation);
    user.password = "";
    return user;
  } catch (error) {
    throw createError({ statusCode: 500 });
  }
});
