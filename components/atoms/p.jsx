import React from "react";

const PElement = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default PElement;