import mailchimp from "@mailchimp/mailchimp_marketing";
require("dotenv").config();

mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
});

const listId = process.env.LIST_ID;

const apiMail = async (req, res) => {
  const subscribingUser = {
    firstName: "",
    lastName: "",
    email: req.body.email,
  };

  let response;
  try {
    response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default apiMail;
