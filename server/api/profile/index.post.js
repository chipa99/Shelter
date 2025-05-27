import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const body = await readBody(event);
    console.log(body);
    const user = await User.findOne({ mail: body.mail });
    if (user) {
      if (user.password == body.password) {
        delete user[password];
        return user;
      } else {
        return createError({ statusCode: 401 });
      }
    } else {
      return createError({ statusCode: 404 });
    }
  } catch (e) {
    console.error(e);
  }
});
