import { Router } from "express";
import twilio from "twilio";
import configTwilio from "../config/sms.config.js";

const router = Router();
const cliet = twilio(
  configTwilio.twilioAccountSID,
  configTwilio.twilioAuthToken
);

router.post("/", async (req, res) => {
  try {
    const { to, name, product } = req.body;
    const body = `Hola ${name}, tu ${product} ha sido despachado y pronto lo recibiras`;

    const result = await cliet.messages.create({
      from: configTwilio.twilioSMSNumber,
      to,
      body,
    });

    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
