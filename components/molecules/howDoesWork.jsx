import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import { ParagraphHowDoesWork } from "../../constants";

export const HowDoesWork = ({}) => {
  return (
    <div className="background-white">
      <Images src={ImageHoprPrivacy} width={850} height={300} className="test"/>
      <div className="apps-problematic">
        <ul>
          {ParagraphHowDoesWork.map((x, i) => (
            <li key={i}>
              <x.label>{x.text}</x.label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
