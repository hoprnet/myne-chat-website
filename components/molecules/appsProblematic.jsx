import Images from "../atoms/images";
import ImageHoprPrivacy from "../../public/assets/images/seg01.png";
import { ParagraphsAppsProblematic } from "../../constants";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AppsProblematic = ({}) => {
  const gsapControlledRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gsapControlledRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(gsapControlledRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "power1.inOut",
      x: 500,
    });

    return (() => {
      tl.kill();
    })
  }, []);

  return (
    <div
      className="background-white sub-section"
      ref={gsapControlledRef}
    >
      <h6>The state of chatting in the early 2020s:</h6>
      <Images src={ImageHoprPrivacy} />
      <div className="content-column">
        {ParagraphsAppsProblematic.map((x, i) => (
          <div className="col-2" key={i}>
            <x.label>{x.text}</x.label>
          </div>
        ))}
      </div>
    </div>
  );
};
