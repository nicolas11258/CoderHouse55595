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

const auth = (req, res, next) => {
  if (req.session?.user === "pepe" && req.session?.admin) {
    return next();
  }

  res.status(401).send("Error authorization");
};

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (username !== "pepe" || password !== "pepepass") {
    res.status(401).send("Login failed");
  }

  req.session.user = username;
  req.session.admin = true;

  res.send("Login success!");
});

app.get("/login", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.send({
        status: "Error LOGOUT",
        body: error,
      });
    }
    res.send("Logout OK!");
  });
});

app.get("/privado", auth, (req, res) => {
  res.send("Si ves esto es porque estas autorizado");
});
