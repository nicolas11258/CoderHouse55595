import mongoose from "mongoose";
import "dotenv/config.js";

mongoose.connect(process.env.DB, {});

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error de conexión a la base de datos:")
);
db.once("open", () => {
  console.log("Conectado a la base de datos");
});

export { mongoose, db };
