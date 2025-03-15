import specialPriceSchema from "../schemas/specialPrice.schema.js";

class specialPriceModel {
  async getAll() {
    return await specialPriceSchema.find();
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
}

export default new specialPriceModel();
