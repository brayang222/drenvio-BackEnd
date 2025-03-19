import specialPriceSchema from "../schemas/specialPrice.schema.js";

class specialPriceModel {
  async getAll() {
    return await specialPriceSchema
      .find()
      .populate("productId", "_id, name")
      .populate("usersDiscounts.userId", "email");
  }

  async create(specialPrice) {
    return await specialPriceSchema.create(specialPrice);
  }

  async update(id, specialPrice) {
    return await specialPriceSchema.findByIdAndUpdate(id, specialPrice);
  }

  async getOneById(id) {
    return await specialPriceSchema.findById(id);
  }

  async delete(id) {
    return await specialPriceSchema.findOneAndDelete(id);
  }
}

export default new specialPriceModel();
