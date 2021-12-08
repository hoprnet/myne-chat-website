import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/seg01.png";
import { ParagraphsAppsProblematic } from "../../constants";

export const AppsProblematic = ({}) => {
  return (
    <div className="background-white sub-section">
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
