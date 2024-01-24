import app from "./index.js";

const port = 3000

app.listen(port, (req, res) => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
