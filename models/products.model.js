import { COLLECTION_PRECIOS_ESPECIALES } from "../constants.js";
import products from "../schemas/products.schema.js";

class productsModel {
  async getAll() {
    return await products.aggregate([
      {
        $lookup: {
          from: COLLECTION_PRECIOS_ESPECIALES,
          localField: "_id",
          foreignField: "productId",
          as: "discounts",
        },
      },
      {
        $unwind: {
          path: "$discounts",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          discounts: {
            usersDiscounts: "$discounts.usersDiscounts",
            discountPercentaje: "$discounts.discountPercentaje",
          },
        },
      },
    ]);
  }
}

export default new productsModel();
