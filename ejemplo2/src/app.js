import express from "express";
import config from "./config/server.config.js";

const app = express();

const port = config.port;
const mode = config.mode;

if (port) {
  app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port} en modo ${mode}`);
  });
} else {
  console.error("No hay variables de entorno configuradas");
}
