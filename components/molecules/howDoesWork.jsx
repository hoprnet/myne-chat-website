import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import { ParagraphHowDoesWork } from "../../constants";

export const HowDoesWork = ({}) => {
  return (
    <div className="background-white sub-section how-does-work">
      <Images
        src={ImageHoprPrivacy}
        width={800}
        height={300}
        className="logo"
      />
      <div>
        <ul className="content-column">
          {ParagraphHowDoesWork.map((x, i) => (
            <li key={i} className="col-2">
              <x.label>{x.text}</x.label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
