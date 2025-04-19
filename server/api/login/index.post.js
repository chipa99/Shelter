import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const fields = readBody(event);
    if (fields) {
      const user = new User(fields);
      return user;
    }
  } catch (e) {
    console.error(e);
  }
});
