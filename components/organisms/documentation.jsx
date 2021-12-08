import React from "react";
import { DocumentationPragraph } from "../../constants";
import { Footer } from "../molecules/footer";
import { Logo } from "../molecules/logo";
import { ParagrahpHopr } from "../molecules/paragraph";
import { Sections } from "../molecules/sections";

const Documentation = ({}) => {
  return (
    <>
      <Logo paragraph="Documentation" />

      <Sections>
        <ParagrahpHopr p={DocumentationPragraph} />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default Documentation;
