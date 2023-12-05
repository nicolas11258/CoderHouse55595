import express from "express";
import {
  registerUser,
  loginUser,
  logOutUser,
} from "../../controllers/authController.js";
import { showProfile } from "../../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", logOutUser);

export default router;
