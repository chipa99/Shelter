import { Pet } from "~~/server/models/pet.model";

export default defineEventHandler(async (event) => {
  const { skip, query } = getQuery(event);
  const searchQuery = query ? JSON.parse(query) : {};

  const pets = await Pet.find(searchQuery).skip(+skip).limit(9).lean();
  const total = await Pet.countDocuments(searchQuery);

  return { pets, total };
});
