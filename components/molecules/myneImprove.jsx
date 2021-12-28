import Images from "../atoms/images";
import ImageHoprChat from "../../public/assets/images/seg02.png";
import { ParagraphsMyneImprove, Paragraphs2MyneImprove } from "../../constants";
import { useEffect, useRef } from "react";
import { sectionAnimations } from "../../utils/gsapAnimations";

export const MyneImprove = ({}) => {
  const refMyneImprove = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refMyneImprove, 250, 0);

    return () => {
      tl.kill();
    };
  }, [refMyneImprove]);

  return (
    <div className="background-white sub-section" ref={refMyneImprove}>
      <div className="content-column">
        {ParagraphsMyneImprove.map((x, i) => (
          <div key={i} className="col-2">
            <x.label className={x.className}>{x.text}</x.label>
          </div>
        ))}
      </div>
      <div className="img-myne-improve-container">
        <Images
          src={ImageHoprChat}
          width={828}
          height={546}
          className="img-myne-improve"
        />
      </div>
      <div className="content-column myne-improve">
        {Paragraphs2MyneImprove.map((x, i) => (
          <div key={i} className="col-3">
            <Images src={x.img} width={90} height={x.height} />
            <p>{x.title}</p>
            <p>{x.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
