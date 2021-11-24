import React from "react";
import { CollapseElement } from "../molecules/collapse";
import { Footer } from "../molecules/footer";
import { Sections } from "../molecules/sections";
import ImageMyneLogo from "../../public/assets/images/myne_logo_dark.png";
import Images from "../atoms/images";
import { NewsLetter } from "../molecules/newsLetter";

const Faq = ({}) => {
  return (
    <>
      <Sections className="faq">
        <Images src={ImageMyneLogo} width={220} height={80} />
        <h3>FAQ</h3>
      </Sections>

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
