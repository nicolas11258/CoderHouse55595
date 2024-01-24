import { Router } from "express";
import CustomError from "../utils/errors/Custom.error.js";
import generateUserErrorInfo from "../utils/errors/info.error.js";
import EnumError from "../utils/errors/enum.error.js";

const router = Router();
const users = [];

router.get("/string", (req, res) => {
  let string = "Hola gente cómo vamos!";

  for (let i = 0; i < 10e5; i++) {
    string += " Hola gente cómo vamos!";
  }

  res.send(string);
});

router.post("/", (req, res) => {
  const { first_name, last_name, age, email } = req.body;
  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: "User creation error",
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: "Error trying to create an user",
      code: EnumError.INVALID_TYPES_ERROR,
    });
  }

  const user = {
    first_name,
    last_name,
    age,
    email,
  };

  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }

  users.push(user);

  res.json({ message: user });
});

export default router;
