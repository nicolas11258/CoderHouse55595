import { Router } from "express";
import { Contacts } from "../dao/factory.js";

const router = Router();
const contactService = new Contacts();

router.get("/", async (req, res) => {
  const result = await contactService.get();
  res.send({ status: "success", payload: result });
});

export default router;
