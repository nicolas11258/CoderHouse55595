import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  let data = {
    layout: "main",
    title: "Inicio de sesión",
    title_register: "Registro",
    actionRegister: "http://localhost:8080/api/sessions/register/",
    actionLogin: "http://localhost:8080/api/sessions/login/",
    submitLabel: "Login",
    submitLabelRegister: "Register",
  };
  res.render("index", data);
});


export default router;
