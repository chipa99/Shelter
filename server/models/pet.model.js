import { Schema, model } from "mongoose";

const PetSchema = new Schema(
  {
    name: { type: String, required: true },
    birthdate: { type: String, required: true },
    color: { type: String, required: true },
    wool: { type: String, required: true },
    description: { type: String, required: true, maxlength: 500 },
    image: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.__v;
      },
    }, // Чистый JSON
    lean: true, // .lean() по умолчанию
  },
);

export const Pet = model("Pet", PetSchema);
