import express from "express";
import { router } from "./routes/users.router.js";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("./src/public"));

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

const conectDBURI =
  "mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(conectDBURI, {})
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });
