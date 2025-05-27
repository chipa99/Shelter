import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shelter");
    const fields = await readBody(event);
    console.log(fields);
    if (fields) {
      const user = await User.find({ mail: fields.mail });
      if (!user) {
        const newUser = new User(fields);
        await newUser.save();
        delete newUser[password];
        return newUser;
      } else {
        return createError({ statusCode: 409 });
      }
    }
  } catch (e) {
    console.error(e);
  }
});
