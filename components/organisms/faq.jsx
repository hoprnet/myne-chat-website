import React from "react";
import { CollapseElement } from "../molecules/collapse";
import { Footer } from "../molecules/footer";
import { Logo } from "../molecules/logo";
import { NewsLetter } from "../molecules/newsLetter";
import { Sections } from "../molecules/sections";

const Faq = ({}) => {
  return (
    <>
      <Logo paragraph="FAQ" />

      <Sections>
        <CollapseElement />
      </Sections>

      <Sections className="background-gray">
        <h4>Newsletter</h4>
        <NewsLetter />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default Faq;
