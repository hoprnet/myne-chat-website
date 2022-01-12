export const MiddlewareSendMail = async (email) => {
  let response;
  try {
    if (!localStorage.getItem("mail-time")) {
      response = await fetchSendEmail(email);
    } else {
      const time = new Date();
      const mailTimeRequest = localStorage.getItem("mail-time");
      const mailTimeRequestTime = new Date(mailTimeRequest);

      if (mailTimeRequestTime.getDay() === time.getDay()) {
        const mailTimeRequestHour =
          mailTimeRequestTime.getHours() + mailTimeRequestTime.getMinutes();
        const CurrentHour = time.getHours() + time.getMinutes();
        let hourSubtraction =
          parseInt(CurrentHour) - parseInt(mailTimeRequestHour);

        hourSubtraction = Math.abs(hourSubtraction);

        if (hourSubtraction < 2) {
          return "error-mail-time";
        } else {
          response = await fetchSendEmail(email);
        }
      } else {
        response = await fetchSendEmail(email);
      }
    }
  } catch (error) {
    console.log("Error", error);
  }
  return response;
};

const fetchSendEmail = async (email) => {
  const response = await fetch("/api/mail", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 200) {
    localStorage.setItem("mail-time", new Date());
  }

  return response;
};
