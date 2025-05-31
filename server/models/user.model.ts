import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstname: {
        required: true,
        type: String
    },
    surname: String,
    mail: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    description: String,
    image: String,
    favorite: [String]
});

export const User = model("User", UserSchema);