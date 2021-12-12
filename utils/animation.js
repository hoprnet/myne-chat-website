import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const sectionAnimations = (useRef, x, y) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: useRef.current,
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(useRef.current, {
    duration: 0.5,
    autoAlpha: 0,
    ease: "power1.inOut",
    x: x,
    y: y,
  });

  return tl;
};
