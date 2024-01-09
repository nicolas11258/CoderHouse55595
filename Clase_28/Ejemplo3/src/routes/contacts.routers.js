import { Router } from "express";
import { Contacts } from "../dao/factory.js";
import ContactDTO from "../dao/DTOs/contact.dto.js";

const router = Router();
const contactService = new Contacts();

router.get("/", async (req, res) => {
  const result = await contactService.get();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  console.log(req.body)
  const { name, email, cellphone } = req.body;
  const contact = new ContactDTO({ name, email, cellphone });
  const result = await contactService.createContact(contact);
  res.send({ status: "success", payload: result });
});

export default router;
