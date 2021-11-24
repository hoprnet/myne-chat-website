import Images from "../atoms/images";
import { Sections } from "./sections";
import ImageMyneLogo from "../../public/assets/images/myne_logo_dark.png";
import ALink from "../atoms/a";

export const Logo = ({ paragraph }) => {
  return (
    <Sections className="logo">
      <ALink href="/">
        <Images src={ImageMyneLogo} width={220} height={80} />
      </ALink>
      <h3>{paragraph}</h3>
    </Sections>
  );
};
