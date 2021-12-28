import { SocialNetworks, ParagraphsFooter } from "../../constants";
import Images from "../atoms/images";
import PElement from "../atoms/p";
import ALink from "../atoms/a";

import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import TextPlugin from "gsap/dist/TextPlugin";
import { TypeWriterAnimation } from "../../utils/gsapAnimations";
gsap.registerPlugin(TextPlugin);

export const Footer = ({}) => {
  useEffect(() => {
    let masterTl = TypeWriterAnimation("#cursor-footer", "#box-footer");
    
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to("#text-footer", { duration: 1, text: "myne" });
    masterTl.add(tl);
  }, []);

  return (
    <footer>
      <div className="content-column">
        <div className="col-2">
          <div className="logo-text-animated">
            <ALink href="/">
              <h2 id="box-footer"></h2>
              <h2 id="text-footer"></h2>
              <h2 id="cursor-footer" className="cursor-animated">
                |
              </h2>
            </ALink>
          </div>
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
