import dotenv from "dotenv";

dotenv.config();

export default {
  serviceMail: process.env.SERVICE_MAIL,
  serviceMailPort: process.env.SERVICE_MAIL_PORT,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD,
};
