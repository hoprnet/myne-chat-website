import React from "react";
import { CookiePolicyPragraph } from "../../constants";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";
import { Footer } from "../molecules/footer";

const CookiePolicy = ({}) => {
  return (
    <>
      <Logo paragraph="Cookie Policy" />

      <Sections>
        <ParagrahpHopr p={CookiePolicyPragraph} title="Cookie policy"/>
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default CookiePolicy;
