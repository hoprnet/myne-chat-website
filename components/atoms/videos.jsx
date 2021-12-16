import React from "react";

const Videos = ({
  controls,
  loop,
  width,
  muted,
  autoPlay,
  className,
  src,
  videoType,
}) => {
  return (
    <video
      controls={controls}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      className={className}
      width={width}
    >
      <source src={src} type={videoType} />
    </video>
  );
};

export default Videos;
