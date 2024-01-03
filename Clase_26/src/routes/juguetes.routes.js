import { Router } from "express";
import {
  obtenerJuguetes,
  agregarJuguete,
} from "../controllers/juguetes.controller.js";

const router = Router();

router.get("/juguetes", obtenerJuguetes);
router.post("/juguetes", agregarJuguete);

export default router;
