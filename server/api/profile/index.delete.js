import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const { _id } = await readBody(event);
    await User.findByIdAndDelete(_id);
  } catch (e) {
    console.error(e);
  }
});
