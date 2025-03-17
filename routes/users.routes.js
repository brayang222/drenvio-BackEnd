import express from "express";
import usersController from "../controllers/users.controller.js";

const route = express.Router();

route.get("/", usersController.getAll);
route.post("/register", usersController.register);
route.post("/login", usersController.login);
route.delete("/delete/:id", usersController.delete);

export default route;
