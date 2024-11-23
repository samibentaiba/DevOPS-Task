// UserModel.js
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true, minlength: 8 },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["Male", "Female"],
  },
  dateOfBirth: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
});

const User = model("User", userSchema);
export default User;
