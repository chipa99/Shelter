import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const { _id } = await readBody(event);
    await User.findByIdAndDelete(_id);
  } catch (e) {
    console.error(e);
  }
});
