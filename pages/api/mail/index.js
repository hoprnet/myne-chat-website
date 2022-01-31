import mailchimp from "@mailchimp/mailchimp_marketing";
require("dotenv").config();

const apiMail = async (req, res) => {
  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "hopr",
  });

  const response = await mailchimp.ping.get();
  console.log("mailchimp", response);
};

export default apiMail;
