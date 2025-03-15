import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import routesProducts from "./routes/products.routes.js";
import routesSpecialPrice from "./routes/specialPrice.routes.js";
import routesUsers from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", () => console.log("Localhost"));

app.use("/products", routesProducts);
app.use("/specialPrice", routesSpecialPrice);
app.use("/users", routesUsers);

const startServer = async () => {
  try {
    await dbClient.connectDB();
    app.listen(PORT, () => console.log(`🚀 Server running in port: ${PORT}`));
  } catch (error) {
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", async () => {
  await dbClient.closeConnection();
  process.exit(0);
});
