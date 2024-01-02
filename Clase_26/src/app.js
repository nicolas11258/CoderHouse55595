import express from "express";
import juguetesRoutes from "./routes/juguetes.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.use("/api", juguetesRoutes);
app.use("/api", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en http://localhost: ${PORT}`);
});
