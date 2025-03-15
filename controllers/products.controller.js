import productsModels from "../models/products.model.js";

class productsController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await productsModels.getAll();
      res.status(201).json(data);
    } catch (error) {
      console.error("❌ Error obteniendo productos", error);
      res.status(500).send(error);
    }
  }
}

export default new productsController();
