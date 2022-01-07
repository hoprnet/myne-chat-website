import nodemailer from "nodemailer";
require("dotenv").config();

export default (req, res) => {
  let oConfig = {
      pool: true,
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || 465, 10),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        name: process.env.EMAIL_SEND_NAME,
        user: process.env.EMAIL_SEND_EMAIL,
        pass: process.env.EMAIL_SEND_PASSWORD,
      },
    },
    oMessage = {
      from: `${oConfig.auth.name} <${oConfig.auth.user}>`,
      to: req.body.email,
      subject: "Prueba",
      headers: {
        contentType: "text/html",
        charset: "UTF-8",
      },
    };

  const transporter = nodemailer.createTransport(oConfig);

  let code = 0;

  transporter.sendMail(oMessage, (err, info) => {
    try {
      if (err) {
        console.log("Error", err);
        code = 400;
      } else {
        code = 200;
      }
    } catch (error) {
      code = 400;
    }
  });

  if (code === 400) {
    res.status(400).json({ message: "No se pudo enviar el email" });
  } else {
    res.status(200).json({ message: "Email enviado" });
  }
};
