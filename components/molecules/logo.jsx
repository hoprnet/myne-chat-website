import Images from "../atoms/images";
import { Sections } from "./sections";
import LogoMyne from "../../public/assets/images/LogoMyne.svg";
import ALink from "../atoms/a";

export const Logo = ({ paragraph }) => {
  return (
    <Sections>
      <div className="logo">
        <ALink href="/">
          <Images src={LogoMyne} width={220} height={80} />
        </ALink>
        <h3>{paragraph}</h3>
      </div>
    </Sections>
  );
};
