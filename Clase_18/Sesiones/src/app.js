import express from "express";
import session from "express-session";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Servidor escuchando por el puerto: ${port}`);
});

app.use(
  session({
    secret: "codesecret",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces.`);
  } else {
    req.session.counter = 1;
    res.send(`¡Bienvenido!`);
  }
});
