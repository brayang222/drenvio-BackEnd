import express from "express";
import specialPriceController from "../controllers/specialPrice.controller.js";

const route = express.Router();

route.get("/", specialPriceController.getAll);
route.post("/create", specialPriceController.create);

export default route;
