import { COLLECTION_PRODUCTS } from "../constants.js";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String },
    sku: { type: String, unique: true, required: true },
    stock: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
  },
  {
    collection: COLLECTION_PRODUCTS,
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(COLLECTION_PRODUCTS, productSchema);
