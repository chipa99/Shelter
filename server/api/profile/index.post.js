import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { mail, password } = await readBody(event);
  const user = await User.findOne({ mail });

  if (!user?.comparePassword(password)) {
    throw createError({
      statusCode: 401,
      message: "Неверный email или пароль",
    });
  }

  return { success: true, user: user.toJSON() }; // Без password
});
