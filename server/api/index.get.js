import { Pet } from "~~/server/models/pet.model";
import { connect } from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    await connect("mongodb://localhost:27017/shelter");
    let { skip, query } = getQuery(event);
    query = JSON.parse(query);
    const pets = await Pet.find(query).skip(skip).limit(9);
    const total = (await Pet.find({})).length;
    return { pets, total };
  } catch (e) {
    console.error(e);
  }
});
