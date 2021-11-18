import Images from "../atoms/images";
import ImageHoprChat from "../../public/assets/images/seg02.png";
import { ParagraphsMyneImprove, Paragraphs2MyneImprove } from "../../constants";

export const MyneImprove = ({}) => {
  return (
    <div className="background-white">
      <div className="apps-problematic">
        <ul>
          {ParagraphsMyneImprove.map((x, i) => (
            <li key={i}>
              <x.label>{x.text}</x.label>
            </li>
          ))}
        </ul>
        <Images src={ImageHoprChat} width={828} height={546} />
        <ul>
          {Paragraphs2MyneImprove.map((x, i) => (
            <li key={i}>
              <Images src={x.img} width={90} height={90} />
              <p>{x.title}</p>
              <p>{x.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
