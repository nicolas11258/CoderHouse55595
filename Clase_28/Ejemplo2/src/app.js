import express from "express";
import contactsRoutes from "./routes/contacts.routers.js";
import mongoose from "mongoose";

const app = express();
const port = 8080;
const connection = mongoose.connect(process.env.DB, {});
const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use("/contacts", contactsRoutes);
