import React from "react";
import { TermsServicePragraph } from "../../constants";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const TermsOfService = ({}) => {
  return (
    <>
      <Logo paragraph="Terms of service" />

      <Sections>
        <ParagrahpHopr p={TermsServicePragraph} title="Terms of service" />
      </Sections>
    </>
  );
};

export default TermsOfService;
