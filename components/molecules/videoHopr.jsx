import Videos from "../atoms/videos";
import Images from "../atoms/images";

import imageHoprPrivacy from "../../public/assets/images/hopr_privacy.png"

export const VideoHopr = ({}) => {
  return (
    <>
      <h1>MYNE</h1>
      <h2>Chat. Finally secure</h2>
      <button>Install myne v0.13</button>
      <Images src={imageHoprPrivacy} width={256} height={138} />
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
