import { useEffect, useRef, useState } from "react";
import { sectionAnimations } from "../../utils/gsapAnimations";
import { MiddlewareSendMail } from "../../utils/middleware-mail";
import { useToasts } from "react-toast-notifications";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Oval from "react-loader-spinner/dist/loader/Oval";

export const NewsLetter = ({}) => {
  const refNewsLetter = useRef();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const tl = sectionAnimations(refNewsLetter, 250, 0);

    return () => {
      tl.kill();
    };
  }, [refNewsLetter]);

  const sendEmail = async () => {
    if (!email) {
      return addToast("The mail field is requerid", {
        appearance: "warning",
        autoDismiss: true,
      });
    }

    setLoading(true);

    const res = await MiddlewareSendMail(email);

    if (res === "error-mail-time") {
      addToast("You must wait two minutes to send an email again", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else if (res.status !== 200) {
      addToast("An error occurred sending the mail", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      addToast("Email sent", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    setLoading(false);
  };

  return (
    <div className="news-letter-section" ref={refNewsLetter}>
      <input
        placeholder="Enter your mail-address here"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        value={email}
      />
      <button disabled={loading} onClick={() => sendEmail()}>
        {loading ? (
          <Oval width={50} height={35} className="loading-animation" />
        ) : (
          "Send"
        )}
      </button>
    </div>
  );
};
