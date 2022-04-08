import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap/dist/gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import { useEffect } from "react";
import imageHoprPrivacy from "../../public/assets/images/hopr_data_privacy.png";
import { useWindowSize } from "../../utils/eventsListener";
import { TypeWriterAnimation } from "../../utils/gsapAnimations";
import Images from "../atoms/images";
import Videos from "../atoms/videos";

gsap.registerPlugin(TextPlugin);

const words = ["myne", "private", "resilient", "decentralized"];

export const VideoHopr = ({}) => {
  const windowSize = useWindowSize();

  useEffect(() => {
    let masterTl = TypeWriterAnimation("#cursor-video", "#box-video");

    words.forEach((word, i) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to("#video-text-animated-container", {
        className:
          word === "myne"
            ? "video-text-animated h2-myne"
            : "video-text-animated h2-regular",
      });

      tl.to("#text-video", {
        duration: 1,
        text: word,
        fontFamily: word === "myne" ? "myne regular" : "",
      });
      masterTl.add(tl);
    });
  }, []);

  return (
    <div className="aux-container">
      <div id="video-text-animated-container" className="video-text-animated">
        <h2 id="box-video"></h2>
        <h2 id="text-video"></h2>
        <h2 id="cursor-video" className="cursor-animated">
          |
        </h2>
      </div>
      <div>
        <h2 className="title-video">Chat. Finally secure</h2>
        <button type="button" className="install-button">
          <FontAwesomeIcon icon={faArrowDown} /> Launch myne 0.2
        </button>
        <button type="button" className="install-button left-position">
          Documentation
        </button>
      </div>
      <div className="bottom-image">
        <Images src={imageHoprPrivacy} width={110} height={130} />
      </div>

      {windowSize.width <= 480 && windowSize.orientation === "portrait" ? (
        <Videos
          videoType="video/mp4"
          controls={false}
          loop={true}
          muted={true}
          autoPlay={true}
          className="background-video"
          src={require("../../public/assets/videos/myne-mobile.mp4")}
        />
      ) : windowSize.width <= 768 && windowSize.orientation === "portrait" ? (
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
