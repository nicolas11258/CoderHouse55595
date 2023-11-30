import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Formulario del home");
});

export default router;
