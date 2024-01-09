import { Router } from "express";
import Contacts from "../dao/mongodb/contacts.mongodb.js";

const router = Router();
const contactService = new Contacts();

router.get("/", async (req, res) => {
  const result = await contactService.get();
  res.send({ status: "success", payload: result });
});

router.post('/contacts', async (req, res) => {
  const newContact = req.body;
  const result = await contactService.post(newContact);
  res.send({ status: "success", payload: result });
});

router.put('/contacts/:id', async (req, res) => {
  const contactId = req.params.id;
  const updatedContact = req.body;
  const result = await contactService.put(contactId, updatedContact);
  res.send({ status: "success", payload: result });
});

router.delete('/contacts/:id', async (req, res) => {
  const contactId = req.params.id;
  const result = await contactService.delete(contactId);
  res.send({ status: "success", payload: result });
});

export default router;
