import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const body = await readBody(event);
    let user;
    if (!body.password) {
      const { password } = await User.findOne({ mail: body.mail });
      body.password = password;
      user = await User.findOneAndUpdate({ mail: body.mail }, body);
    } else {
      user = await User.findOneAndUpdate({ mail: body.mail }, body);
    }
    return user;
  } catch (e) {
    console.error(e);
  }
});
