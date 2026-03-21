import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { password, ...userData } = await readBody(event); // Убираем password

  const existing = await User.findOne({ mail: userData.mail });
  if (existing) throw createError({ statusCode: 409 });

  const user = await new User({ ...userData, favorite: [] }).save();
  return user.toJSON(); // Без password автоматически
});
