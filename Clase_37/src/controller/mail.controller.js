import { Router } from "express";
import transport from "../utils/email.util.js";
import emailConfig from "../config/email.config.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    const html = `
        <html>
            <div>
                ${message}
            </div>
        </html>
    `;
    const mailOptions = {
      from: emailConfig.emailUser,
      to,
      subject,
      html,
      attachments: [
        {
          filename: "design-patterns-es.pdf",
          path: process.cwd() + "/src/files/design-patterns-es.pdf",
        },
      ],
    };

    const result = await transport.sendMail(mailOptions);
    res.json({ messaje: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
