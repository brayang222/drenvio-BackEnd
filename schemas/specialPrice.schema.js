import mongoose from "mongoose";

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
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("PreciosEspecialesVargas22", specialPriceSchema);
