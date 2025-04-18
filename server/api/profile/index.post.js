import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const body = await readBody(event);
    const user = User.findOne(body);
    return user;
  } catch (e) {
    console.error(e);
  }
});
