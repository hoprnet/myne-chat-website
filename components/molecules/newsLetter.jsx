import { useEffect, useRef, useState } from "react";
import { sectionAnimations } from "../../utils/gsapAnimations";
import { MiddlewareSendMail } from "../../utils/middleware-mail";

export const NewsLetter = ({}) => {
  const refNewsLetter = useRef();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const tl = sectionAnimations(refNewsLetter, 250, 0);

    return () => {
      tl.kill();
    };
  }, [refNewsLetter]);

  const sendEmail = async () => {
    if (!email) {
      return alert("The mail field is requerid");
    }

    const res = await MiddlewareSendMail(email);
    if(res === "error"){
      alert("debes esperar 3 minutos para volver a enviar un video")
    }else{
      alert("email enviado")
    }
  };

  return (
    <div className="news-letter-section" ref={refNewsLetter}>
      <input
        placeholder="Enter your mail-address here"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        value={email}
      />
      <button onClick={() => sendEmail()}>Send</button>
    </div>
  );
};
