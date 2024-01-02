import { Router } from "express";
import {
  obtenerUsuarios,
  agregarUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);

export default router;
