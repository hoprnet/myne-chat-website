import Videos from "../atoms/videos";
import Images from "../atoms/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import imageHoprPrivacy from "../../public/assets/images/hopr_privacy.png";
import { useEffect, useState } from "react";

import { gsap } from "gsap/dist/gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import { TypeWriterAnimation } from "../../utils/gsapAnimations";
gsap.registerPlugin(TextPlugin);

const words = ["decentralized", "private", "resilient", "myne"];

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

  useEffect(() => {
    let masterTl = TypeWriterAnimation("#cursor-video", "#box-video");

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1.5, yoyo: true, repeatDelay: 1 });
      tl.to("#text-video", { duration: 1, text: word });
      masterTl.add(tl);
    });
  }, []);

  return (
    <div className="aux-container">
      <div className="video-text-animated">
        <h2 id="box-video"></h2>
        <h2 id="text-video"></h2>
        <h2 id="cursor-video" className="cursor-animated">
          |
        </h2>
      </div>
      <h2 className="title-video">Chat. Finally secure</h2>
      <button type="button" className="install-button">
        <FontAwesomeIcon icon={faArrowDown} /> Launch myne 0.2
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
