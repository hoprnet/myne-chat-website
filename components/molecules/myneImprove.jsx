import Images from "../atoms/images";
import ImageHoprChat from "../../public/assets/images/seg02.png";
import { ParagraphsMyneImprove, Paragraphs2MyneImprove } from "../../constants";

export const MyneImprove = ({}) => {
  return (
    <div className="background-white sub-section">
        <ul className="content-column">
          {ParagraphsMyneImprove.map((x, i) => (
            <li key={i} className="col-2">
              <x.label>{x.text}</x.label>
            </li>
          ))}
        </ul>
        <Images src={ImageHoprChat} width={828} height={546} />
        <ul className="content-column myne-improve">
          {Paragraphs2MyneImprove.map((x, i) => (
            <li key={i} className="col-3">
              <Images src={x.img} width={90} height={90} />
              <p>{x.title}</p>
              <p>{x.text}</p>
            </li>
          ))}
        </ul>
    </div>
  );
};
