import Videos from "../atoms/videos";
import Images from "../atoms/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import imageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import ImageMyneLogo from "../../public/assets/images/myne_logo.png";

export const VideoHopr = ({}) => {
  return (
    <>
      <Images className="logo" src={ImageMyneLogo} width={300} height={121} />
      <h2>Chat. Finally secure</h2>
      <button type="button">
        <FontAwesomeIcon icon={faArrowDown} /> Install myne v0.13
      </button>
      <div className="bottom-image">
        <Images src={imageHoprPrivacy} width={256} height={138} />
      </div>
      <Videos
        videoType="video/mp4"
        controls={false}
        loop={true}
        muted={true}
        autoPlay={true}
        className="background-video"
        src={require("../../public/assets/videos/myne.mp4")}
      />
    </>
  );
};
