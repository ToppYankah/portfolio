"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateLogo = (
  lettersRef: MutableRefObject<(HTMLSpanElement | null)[]>,
) => {
  return gsap.fromTo(
    lettersRef.current,
    { yPercent: 100 },
    {
      delay: 2,
      yPercent: 0,
      duration: 1,
      stagger: 0.2,
      ease: "expo.out",
    },
  );
};

export const startHeroAnimations = (
  upperRef: MutableRefObject<HTMLHeadingElement | null>,
  middleRef: MutableRefObject<HTMLHeadingElement | null>,
  lowerRef: MutableRefObject<HTMLHeadingElement | null>,
  badgeRef: MutableRefObject<HTMLDivElement | null>,
  badgeImageRef: MutableRefObject<HTMLImageElement | null>,
  upperContainerRef: MutableRefObject<HTMLDivElement | null>,
  lowerContainerRef: MutableRefObject<HTMLDivElement | null>,
  titleContainerRef: MutableRefObject<HTMLDivElement | null>,
  onComplete: () => void,
) => {
  // gsap.timeline().add(slideIn()).add(activateNavLink());
  gsap
    .timeline({ onComplete: onComplete })
    .add(
      gsap.fromTo(
        [upperRef.current, middleRef.current, lowerRef.current],
        {
          yPercent: 100,
          duration: 2,
        },
        {
          yPercent: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "expo.out",
        },
      ),
    )
    .add(
      gsap.fromTo(
        [upperRef.current, middleRef.current, lowerRef.current],
        {
          filter: "blur(15px)",
          rotateX: -30,
          duration: 2,
        },
        {
          filter: "blur(0px)",
          rotateX: 0,
          stagger: 0.2,
          duration: 2,
          ease: "expo.out",
        },
      ),
      "<"
    )
    .add(
      gsap.to(
        upperContainerRef.current,
        {
          duration: 1,
          xPercent: -20,
          ease: "expo.out",
        },
      ),
    )
    .add(
      gsap.to(lowerContainerRef.current, {
        xPercent: 10,
        duration: 1,
        ease: "expo.out",
      }),
      "<",
    )
    .add(gsap.fromTo("#short-bio", { yPercent: 50, opacity: 0, filter: "blur(8px)" }, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1 }), "<")
    .add(gsap.fromTo(badgeRef.current, { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 1 }), "<")
    .add(gsap.to(badgeRef.current, { xPercent: 10, duration: .5 }), "-=0.5")
    .add(
      gsap.fromTo(
        "#scroll-indicator .wrapper",
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 1,
          onComplete: () => {
            onComplete();
            titleScrollAnimate(
              titleContainerRef,
              upperContainerRef,
              lowerContainerRef,
              badgeRef,
            );
            sectionFadeAnimate();
          },
        },
      ),
      "<",
    )
    .add(gsap.fromTo("#short-note", { yPercent: 50, opacity: 0, filter: "blur(8px)" }, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1 }))
    .add(gsap.to(badgeImageRef.current, { rotate: 360, repeat: -1, duration: 10, ease: "none" }), "<");
};

const sectionFadeAnimate = () =>
gsap
    .timeline({
      scrollTrigger: {
        scrub: true,
        trigger: "#hero",
        start: "80% 40%",
        end: "bottom top",
      },
    })
    .add(
      gsap.fromTo(
        "#hero",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ),
    );

const titleScrollAnimate = (
  titleContainerRef: MutableRefObject<HTMLDivElement | null>,
  upperContainerRef: MutableRefObject<HTMLDivElement | null>,
  lowerContainerRef: MutableRefObject<HTMLDivElement | null>,
  badgeRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleContainerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl
    .add(gsap.fromTo(upperContainerRef.current, { xPercent: -20 }, { xPercent: -30 }))
    .add(gsap.fromTo(lowerContainerRef.current, { xPercent: 10 }, { xPercent: 20 }), "<")
    .add(gsap.fromTo(badgeRef.current, { scale: 1 }, { scale: 1.3 }), "<");
  
};

export function animateHeroScrollIndicator(
  arrowsRef: MutableRefObject<(HTMLSpanElement | null)[]>,
) {
  const tween = gsap.fromTo(
    arrowsRef.current,
    { yPercent: 0 },
    { yPercent: 100, repeat: -1, duration: 0.5, ease: "none" },
  );

  return tween;
}