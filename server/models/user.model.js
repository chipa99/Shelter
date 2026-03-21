import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    firstname: {
      required: true,
      type: String,
    },
    mail: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    description: String,
    image: String,
    favorite: [String],
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password; // ← Удаляем password
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      transform: (doc, ret) => {
        delete ret.password; // ← И здесь
        delete ret.__v;
        return ret;
      },
    },
  },
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12); // salt rounds 12
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = model("User", UserSchema);
