import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  let data = {
    layout: "recoverypassword",
    title: "Recuperar contraseña",
    recovery: "/api/sessions/recovery",
  };
  res.render("index", data);
});

export default router;
