import { Schema, model } from "mongoose";

const PetSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    birthdate: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    wool: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    }
});

export const Pet = model("Pet", PetSchema);