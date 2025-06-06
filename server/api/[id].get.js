import { Pet } from "~~/server/models/pet.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    const id = getRouterParam(event, "id");
    const pet = await Pet.findById(id);
    return pet;
  } catch (e) {
    console.error(e);
  }
});
