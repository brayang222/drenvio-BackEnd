import { COLLECTION_USERS } from "../constants.js";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, default: "" },
    role: { type: String, default: "user" },
  },
  {
    collection: COLLECTION_USERS,
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(COLLECTION_USERS, userSchema);
