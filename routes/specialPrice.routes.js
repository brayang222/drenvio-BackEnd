import express from "express";
import specialPriceController from "../controllers/specialPrice.controller.js";

const route = express.Router();

route.get("/", specialPriceController.getAll);
route.post("/create", specialPriceController.create);
route.patch("/update/:id", specialPriceController.update);
route.delete("/delete/:id", specialPriceController.delete);

export default route;
