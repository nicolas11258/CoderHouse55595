import express from "express";
import contactsRoutes from "./routes/contacts.routers.js";

const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
app.use(express.json());
app.use("/contacts", contactsRoutes);
