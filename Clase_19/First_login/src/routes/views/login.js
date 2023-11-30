import express from "express";
import { loginUser } from "../../controllers/authController.js";

const router = express.Router();

router.get("/login", (req, res) => {
  let data = {
    layout: "login",
    title: "Inicio de sesión",
    title_register: "Registro",
    actionRegister: "/register",
    actionLogin: "/login",
    submitLabel: "Login",
    submitLabelRegister: "Register",
  };
  res.render("index", data);
});

router.post("/login", (req, res) => {
  loginUser(req, res)
});

export default router;
