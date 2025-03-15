import specialPriceModels from "../models/specialPrice.model.js";

class specialPriceController {
  async getAll(req, res) {
    try {
      const data = await specialPriceModels.getAll();
      res.status(201).json(data);
    } catch (error) {
      console.error("❌ Error obteniendo productos", error);
      res.status(500).send(error);
    }
  }

  async create(req, res) {
    try {
      const data = await specialPriceModels.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.error("❌ Error obteniendo productos", error);
      res.status(500).send(error);
    }
  }
}

export default new specialPriceController();
