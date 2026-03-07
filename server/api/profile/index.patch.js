import { User } from "~~/server/models/user.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const body = await readBody(event);
    const userId = body._id;

    if (!userId) {
      throw createError({ statusCode: 401, statusMessage: "Не авторизован" });
    }

    const user = await User.findById(userId);
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: "Пользователь не найден",
      });
    }

    Object.assign(user, body);
    await user.save();

    const { password, ...safeUser } = user.toObject();
    return { user: safeUser };
  } catch (e) {
    console.error(e);
    throw createError({ statusCode: 500, statusMessage: "Ошибка обновления" });
  }
});
