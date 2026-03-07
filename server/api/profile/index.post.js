import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const { mail, password } = await readBody(event);
    const user = await User.findOne({ mail });
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Неверный email или пароль",
      });
    }

    // СРАВНИВАЕМ пароли: plaintext из формы vs хэш из БД
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        statusMessage: "Неверный email или пароль",
      });
    }

    return {
      success: true,
      user,
    };
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: error.message || "Ошибка авторизации",
    });
  }
});
