import express from "express";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Listenin server on port ${port}`);
});

app.use(express.json());
app.get("/test", (req, res) => {
  res.send("Respuesta");
});
