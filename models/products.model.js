import products from "../schemas/products.schema.js";

class productsModel {
  async getAll() {
    return await products.find();
  }
}

export default new productsModel();