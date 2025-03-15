import express from "express";
import productsController from "../controllers/products.controller.js";

const route = express.Router();

route.get("/", productsController.getAll);

export default route;
