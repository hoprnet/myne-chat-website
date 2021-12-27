import Videos from "../atoms/videos";
import Images from "../atoms/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import imageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import { useEffect, useState } from "react";

export const VideoHopr = ({}) => {
  const [videoMobile, setVideoMobile] = useState(false);
  const [videoTablet, setVideoTablet] = useState(false);

  const setDeviceType = () => {
    if (window.innerWidth <= 480) {
      setVideoMobile(true);
    } else if (window.innerWidth <= 768) {
      setVideoTablet(true);
    }
  };

  useEffect(() => {
    setDeviceType();
  }, []);

  return (
    <div className="aux-container">
      <h2 className="title-video">Chat. Finally secure</h2>
      <button type="button" className="install-button">
        <FontAwesomeIcon icon={faArrowDown} /> Install myne v0.13
      </button>
      <div className="bottom-image">
        <Images src={imageHoprPrivacy} width={256} height={138} />
      </div>

      {videoMobile ? (
        <Videos
          videoType="video/mp4"
          controls={false}
          loop={true}
          muted={true}
          autoPlay={true}
          className="background-video"
          src={require("../../public/assets/videos/myne-mobile.mp4")}
        />
      ) : videoTablet ? (
        <Videos
          videoType="video/mp4"
          controls={false}
          loop={true}
          muted={true}
          autoPlay={true}
          className="background-video"
          src={require("../../public/assets/videos/myne-tablet.mp4")}
        />
      ) : (
        <Videos
          videoType="video/mp4"
          controls={false}
          loop={true}
          muted={true}
          autoPlay={true}
          className="background-video"
          src={require("../../public/assets/videos/myne-desktop.mp4")}
        />
      )}
    </div>
  );
};
