import Videos from "../atoms/videos";
import Images from "../atoms/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import imageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";

export const VideoHopr = ({}) => {
  return (
    <>
      <h1>MYNE</h1>
      <h2>Chat. Finally secure</h2>
      <button>
        <FontAwesomeIcon icon={faArrowDown} /> Install myne v0.13
      </button>
      <div>
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
