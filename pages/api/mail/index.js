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

    res.status(200).json({ message: "ok", status: 200 });
  } catch (error) {
    const status = error?.response?.body?.status || 400;
    res.status(status).json({
      message:
        error?.response?.body?.title ||
        "Unexpected error has occurred check with administrator",
      status,
    });
  }
};

export default apiMail;
