import { useEffect, useRef } from "react";
import { sectionAnimations } from "../../utils/animation";

export const NewsLetter = ({}) => {
  const refNewsLetter = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refNewsLetter, -250, -150);

    return () => {
      tl.kill();
    };
  }, [refNewsLetter]);

  return (
    <form>
      <div className="news-letter-section" ref={refNewsLetter}>
        <input placeholder="Enter your mail-address here" />
        <button>Send</button>
      </div>
    </form>
  );
};
