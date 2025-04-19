import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const body = await readBody(event);
    await User.findOneAndUpdate(body._id, body);
    return "success";
  } catch (e) {
    console.error(e);
  }
});
