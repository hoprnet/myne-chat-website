import React from "react";
import { TermsServicePragraph } from "../../constants";
import { Footer } from "../molecules/footer";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const TermsOfService = ({}) => {
  return (
    <>
      <Logo paragraph="Terms of service" />

      <Sections>
        <ParagrahpHopr p={TermsServicePragraph} />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default TermsOfService;
