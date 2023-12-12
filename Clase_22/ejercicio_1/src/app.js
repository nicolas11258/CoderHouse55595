import express from "express";
import jwt from "jsonwebtoken";

const PRIVATE_KEY = "CoderKeyFeliz";

const app = express();
app.listen(8080, () => console.log("Listening on 8080"));

app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (email === "user@gmail.com" && password === "12345") {
    let token = jwt.sign({ email, password }, PRIVATE_KEY, {
      expiresIn: "12h",
    });
    res.send({ message: "Login Success", token: token });
  } else {
    res.send({ message: "Error login", error: "User-password bad" });
  }
});
