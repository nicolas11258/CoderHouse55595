import express from "express";
import router from "./routes/router.js";

const app = express();
const port = 8080;
app.use(express.json());

router(app);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
