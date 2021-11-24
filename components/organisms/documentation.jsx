import React from "react";
import { DocumentationPragraph } from "../../constants";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const Documentation = ({}) => {
  return (
    <>
      <Logo paragraph="Documentation" />

      <Sections>
        <ParagrahpHopr p={DocumentationPragraph} title="Documentation" />
      </Sections>
    </>
  );
};

export default Documentation;
