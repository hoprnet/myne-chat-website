import React from "react";
import { PrivacyPolicyPragraph } from "../../constants";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const PrivacyPolicy = ({}) => {
  return (
    <>
      <Logo paragraph="Privacy Policy" />

      <Sections>
        <ParagrahpHopr p={PrivacyPolicyPragraph} title="Privacy policy"/>
      </Sections>
    </>
  );
};

export default PrivacyPolicy;
