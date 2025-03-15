import specialPriceSchema from "../schemas/specialPrice.schema.js";

class specialPriceModel {
  async getAll() {
    return await specialPriceSchema.find();
  }

  async create(specialPrice) {
    return await specialPriceSchema.create(specialPrice);
  }
}

export default new specialPriceModel();
