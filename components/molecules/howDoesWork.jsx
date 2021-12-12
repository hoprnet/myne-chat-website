import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import { ParagraphHowDoesWork } from "../../constants";
import ALink from "../atoms/a";
import { useEffect, useRef } from "react";
import { sectionAnimations } from "../../utils/animation";

export const HowDoesWork = ({}) => {
  const refHowDoesWork = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refHowDoesWork, 0, -250);

    return () => {
      tl.kill();
    };
  }, [refHowDoesWork]);

  return (
    <div className="background-white sub-section how-does-work" ref={refHowDoesWork}>
      <div className="image-hopr">
        <Images
          src={ImageHoprPrivacy}
          width={300}
          height={180}
          className="logo"
        />
      </div>
      <div>
        <ul className="content-column">
          {ParagraphHowDoesWork.map((x, i) => (
            <li key={i} className="col-2">
              <x.label>{x.text}</x.label>
              {i === 1 ? (
                <ALink href="https://hoprnet.org/es" target="_blank">
                  <p>HOPRnet.org</p>
                </ALink>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
