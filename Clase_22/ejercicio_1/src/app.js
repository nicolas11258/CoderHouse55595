import express from "express";
import { authToken, generateToken } from "./utils.js";
import handlebars from "express-handlebars";

const app = express();
app.listen(8080, () => console.log("Listening on 8080"));

app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.use(express.static("./src/public"));
const users = [];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find((user) => user.email === email);
  if (exists)
    return res
      .status(400)
      .send({ status: "error", error: "User already exists" });
  const user = {
    name,
    email,
    password,
  };
  users.push(user);
  const access_token = generateToken(user);
  res.send({ status: "success", access_token });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "user@gmail.com" && password === "12345") {
    let token = generateToken(req.body);
    res.send({ message: "Login Success", access_token: token });
  } else {
    res.send({ message: "Error", error: "Error" });
  }
});

app.get("/api/current", authToken, (req, res) => {
  res.send({ status: "success", payload: req.user });
});
