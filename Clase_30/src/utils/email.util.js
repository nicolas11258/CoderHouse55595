import nodemailer from "nodemailer";
import configEmail from "../config/email.config.js";

const transport = nodemailer.createTransport({
  service: configEmail.serviceMail,
  port: configEmail.serviceMailPort,
  auth: {
    user: configEmail.emailUser,
    pass: configEmail.emailPassword,
  },
});

export default transport;
