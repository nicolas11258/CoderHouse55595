import express from "express";
import { loginUser } from "../../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  let data = {
    layout: "main",
    title: "Inicio de sesión",
    title_register: "Registro",
    actionRegister: "/api/sessions/register/",
    actionLogin: "/api/sessions/login/",
    submitLabel: "Login",
    submitLabelRegister: "Register",
  };
  res.render("index", data);
});


export default router;
