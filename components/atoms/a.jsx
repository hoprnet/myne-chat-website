import React from "react";

const ALink = ({ children, href, target }) => {
  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
};

export default ALink;
