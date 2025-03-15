import mongoose from "mongoose";

class dbClient {
  constructor() {}

  async connectDB() {
    try {
      const queryString = `mongodb+srv://${process.env.MONGO_DB}`;
      await mongoose.connect(queryString);
      console.log("✔️ Connected to database");
    } catch (error) {
      console.error("❌ Error connecting to database", error);
    }
  }

  async closeConnection() {
    try {
      await mongoose.disconnect();
      console.log("Closed connection");
    } catch (error) {
      console.error("Error closing connection", error);
    }
  }
}

export default new dbClient();
