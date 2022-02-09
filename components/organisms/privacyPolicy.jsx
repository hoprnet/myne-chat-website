import React from "react";
import { PrivacyPolicyPragraph } from "../../constants";
import { Footer } from "../molecules/footer";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const PrivacyPolicy = ({}) => {
  return (
    <>
      <Logo paragraph="Privacy Policy" />

      <Sections>
        <ParagrahpHopr p={PrivacyPolicyPragraph} title="Privacy statement HOPR"/>
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default PrivacyPolicy;
