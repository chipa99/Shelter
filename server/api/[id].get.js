import { Pet } from "~~/server/models/pet.model";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  return await Pet.findById(id).lean();
});
