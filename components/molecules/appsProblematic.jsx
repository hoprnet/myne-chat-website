import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/seg01.png";
import { ParagraphsAppsProblematic } from "../../constants";

export const AppsProblematic = ({}) => {
  return (
    <div className="background-white apps-problematic">
      <h6>The state of chatting in the early 2020s:</h6>
      <Images src={ImageHoprPrivacy} width={800} height={500} />
      <ul>
        {ParagraphsAppsProblematic.map((x, i) => (
          <li key={i}>
            <x.label>{x.text}</x.label>
          </li>
        ))}
      </ul>
    </div>
  );
};
