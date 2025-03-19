import mongoose from "mongoose";
import { COLLECTION_PRECIOS_ESPECIALES } from "../constants.js";

const specialPriceSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productos",
      required: true,
    },
    usersDiscounts: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "usuarios",
          required: true,
        },
      },
    ],
    discountPercentaje: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
    validUntil: { type: Date },
  },
  {
    collection: COLLECTION_PRECIOS_ESPECIALES,
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  COLLECTION_PRECIOS_ESPECIALES,
  specialPriceSchema
);
