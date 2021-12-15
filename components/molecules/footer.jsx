import ImageMyneLogo from "../../public/assets/images/myne_logo.png";
import { SocialNetworks, ParagraphsFooter } from "../../constants";
import Images from "../atoms/images";
import PElement from "../atoms/p";
import ALink from "../atoms/a";

export const Footer = ({}) => {
  return (
    <footer>
      <div className="content-column">
        <div className="col-2">
          <ALink href="/">
            <Images src={ImageMyneLogo} width={220} height={80} />
          </ALink>
          <div className="social-networks">
            <h6>Follow us</h6>
            {SocialNetworks.map((x, i) => (
              <ALink href={x.href} key={i} target="_blank">
                <Images src={x.img} width={50} height={50} />
              </ALink>
            ))}
          </div>
          <div className="only-desktop-view">
            <PElement>&copy;2021 myne</PElement>
            <div className="hopr-association">
              <PElement>The myne app is developed by the </PElement>
              <ALink href="https://hoprnet.org/es" target="_blank">
                <PElement>HOPR Association</PElement>
              </ALink>
            </div>
          </div>
        </div>

        <div className="col-2 content-column">
          {ParagraphsFooter.map((x, i) => (
            <div key={i} className="col-3">
              <h6>{x.title}</h6>
              {x.descriptions.map((des, j) => (
                <div key={j} className={des.email && "emails"}>
                  <ALink href={des.href && des.href}>
                    <PElement>
                      {des.email ? des.email : des.description}
                    </PElement>
                  </ALink>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="only-mobile-view">
          <PElement className="myne-year">&copy;2021 myne</PElement>
          <div className="hopr-association">
            <PElement>The myne app is developed by the </PElement>
            <ALink href="https://hoprnet.org/es" target="_blank">
              <PElement>HOPR Association</PElement>
            </ALink>
          </div>
        </div>
      </div>
    </footer>
  );
};
