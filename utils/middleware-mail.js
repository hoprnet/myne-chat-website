export const MiddlewareSendMail = async(email) => {
  if (!localStorage.getItem("mail-time")) {
    await fetchSendEmail(email);
  } else {
    const time = new Date();
    const mailTimeRequest = localStorage.getItem("mail-time");
    const mailTimeRequestTime = new Date(mailTimeRequest);

    if (mailTimeRequestTime.getDay() === time.getDay()) {
      const mailTimeRequestHour = mailTimeRequestTime.getHours() + mailTimeRequestTime.getMinutes();
      const CurrentHour = time.getHours() + time.getMinutes();
      const hourSubtraction = parseInt(CurrentHour) - parseInt(mailTimeRequestHour);

      if (hourSubtraction <= 2) {
        return "error";
      } else {
        await fetchSendEmail(email);
      }
    }
  }
};

const fetchSendEmail = async (email) => {
  await fetch("/api/mail", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then((res) => {
      if(res.status === 200){
          localStorage.setItem("mail-time", new Date())
      }
  });
};
