import React from "react";

export const Sections = ({ children, className = "", sectionName }) => {
  return (
    <section className={`section ${className}`} id={sectionName}>
      <div className="container">{children}</div>
    </section>
  );
};
