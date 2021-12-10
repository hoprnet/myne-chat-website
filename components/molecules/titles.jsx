import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const SectionTitles = ({ title, x, y }) => {
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
      x: x,
      y: y
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={gsapControlledRef}>
      <h3>{title}</h3>
    </div>
  );
};
