import mongoose from "mongoose";
import usersSchema from "../schemas/users.schema.js";

class usersModel {
  async getAll() {
    return await usersSchema.find();
  }

  async create(user) {
    return await usersSchema.create(user);
  }

  async getOneByEmail(email) {
    return await usersSchema.findOne({ email });
  }

  async getOneById(id) {
    return await usersSchema.findById(id);
  }

  async delete(id) {
    return await usersSchema.findByIdAndDelete(id);
  }
}

export default new usersModel();
