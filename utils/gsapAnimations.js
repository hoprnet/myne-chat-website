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

export const TypeWriterAnimation = (cursor, box) => {
  gsap.to(cursor, {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  });
  let masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 }).pause();
  let boxTl = gsap.timeline();

  boxTl
    .to(box, {
      duration: 1,
      delay: 0.5,
      ease: "power4.inOut",
    })
    .to(box, {
      duration: 1,
      ease: "elastic.out",
      onComplete: () => masterTl.play(),
    })
    .to(box, {
      duration: 2,
      autoAlpha: 0.7,
      yoyo: true,
      repeat: -1,
    });

    return masterTl
};
