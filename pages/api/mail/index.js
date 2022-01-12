import nodemailer from "nodemailer";
require("dotenv").config();

const wrapperSendMail = async (options) =>
  new Promise((resolve, _) => {
    let oTransporter = nodemailer.createTransport(options.config),
      response = {
        sent: false,
      };

    oTransporter.sendMail(options.message, async (err, info) => {
      if (err) {
        response.error = err.message || err;
      } else {
        response.sent = true;
        response.message_id = info.messageId || info.response;
      }

      resolve(response);
    });
  });

const apiMail = async (req, res) => {
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
      subject: "New mail for newsletter",
      headers: {
        contentType: "text/html",
        charset: "UTF-8",
      },
    };

  const responseTransporter = await wrapperSendMail({
    config: oConfig,
    message: oMessage,
  });

  if (!responseTransporter.sent) {
    res.status(400).json({ message: responseTransporter.error });
  } else {
    res.status(200).json({ message: "Email sent" });
  }
};

export default apiMail;
