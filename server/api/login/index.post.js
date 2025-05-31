import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const fields = await readBody(event);
    if (fields) {
      const user = await User.find({ mail: fields.mail });
      if (user.length == 0) {
        const newUser = new User({
          ...fields,
          surname: "",
          description: "",
          image: "",
          favorite: [],
        });
        await newUser.save();
        delete newUser["password"];
        return newUser;
      } else {
        return createError({ statusCode: 409 });
      }
    }
  } catch (e) {
    console.error(e);
  }
});
