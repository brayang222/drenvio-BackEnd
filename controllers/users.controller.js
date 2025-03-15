import { generateToken } from "../helpers/authentication.js";
import usersModel from "../models/users.model.js";
import bcrypt from "bcrypt";

class usersController {
  async getAll(req, res) {
    try {
      const data = await usersModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      console.error("❌ Error obteniendo usuarios ", error);
      res.status(500).send(error);
    }
  }

  async register(req, res) {
    try {
      const { name, lastName, email, password, gender, role } = req.body;

      const userExist = await usersModel.getOneByEmail(email);
      if (userExist)
        return res.status(400).json({ error: "El usuario ya existe" });

      const encryptedPassword = await bcrypt.hash(password, 10);

      const data = await usersModel.create({
        name,
        lastName,
        email,
        password: encryptedPassword,
        gender,
        role,
      });
      res.status(201).json(data);
    } catch (error) {
      console.error("❌ Error en el registo ", error);
      res.status(500).send(error);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await usersModel.getOneByEmail(email);
      if (!userExist)
        return res.status(400).json({ error: "El usuario no existe" });

      const validPassword = await bcrypt.compare(password, userExist.password);
      if (!validPassword)
        return res.status(400).json({ error: "La clave no es válida" });

      const token = generateToken(email);

      return res.status(200).json({ user: userExist, token });
    } catch (error) {
      console.error("❌ Error ingresando ", error);
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await usersModel.delete(id);
      console.log(id);

      return res.status(206).json(data);
    } catch (error) {
      console.error("❌ Error eliminando ", error);
      res.status(500).send(error);
    }
  }
}

export default new usersController();
