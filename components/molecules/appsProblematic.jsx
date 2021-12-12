import { useEffect, useRef } from "react";
import { ParagraphsAppsProblematic } from "../../constants";
import ImageHoprPrivacy from "../../public/assets/images/seg01.png";
import { sectionAnimations } from "../../utils/animation";
import Images from "../atoms/images";

export const AppsProblematic = ({}) => {
  const refAppProblematic = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refAppProblematic, 250, 0);

    return () => {
      tl.kill();
    };
  }, [refAppProblematic]);

  return (
    <div className="background-white sub-section" ref={refAppProblematic}>
      <h6>The state of chatting in the early 2020s:</h6>
      <Images src={ImageHoprPrivacy} />
      <div className="content-column">
        {ParagraphsAppsProblematic.map((x, i) => (
          <div className="col-2" key={i}>
            <x.label>{x.text}</x.label>
          </div>
        ))}
      </div>
    </div>
  );
};
