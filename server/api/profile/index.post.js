import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const { mail, password } = await readBody(event);
    const user = await User.findOne({ mail });
    if (user) {
      if (user.password == password) {
        const userResponse = { ...user.toObject() };
        delete userResponse.password;
        return userResponse;
      } else {
        return createError({ statusCode: 401 });
      }
    } else {
      return createError({ statusCode: 404 });
    }
  } catch (e) {
    return createError({ statusCode: 500 });
  }
});
