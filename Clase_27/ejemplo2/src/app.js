import express from "express";
import cors from "cors";
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Listenin server on port ${port}`);
});

app.use(express.json());
app.use(cors());
app.get("/test", (req, res) => {
  res.send({ mensaje: "Respuesta" });
});
