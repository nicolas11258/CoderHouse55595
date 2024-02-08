import { Router } from "express";
import UsersDAO from "../dao/Users.dao.js";

const Users = new UsersDAO();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAll();
    res.json({ status: "success", message: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getOne(id);
    res.json({ status: "success", message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const userinfo = req.body;

    const newUser = await Users.create(userinfo);

    res.status(201).json({ status: "success", message: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

export default router;
