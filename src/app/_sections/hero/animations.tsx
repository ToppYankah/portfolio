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
    {
      opacity: 0,
      rotateX: -90,
      yPercent: 50,
      filter: "blur(8px)",
    },
    {
      opacity: 1,
      yPercent: 0,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.1,
    },
  );
};

export const animatePortfolioDate = (
  dateRef: MutableRefObject<HTMLParagraphElement | null>,
  portfolioRef: MutableRefObject<HTMLParagraphElement | null>,
) => {
  return gsap.fromTo(
    [portfolioRef.current, dateRef.current],
    {
      opacity: 0,
      rotateX: -45,
      yPercent: 50,
      filter: "blur(8px)",
    },
    {
      opacity: 1,
      yPercent: 0,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 1,
      stagger: 0.2,
    },
  );
};

export const animateLinks = (
  linksRef: MutableRefObject<(HTMLDivElement | null)[]>,
) => {
  return gsap.fromTo(
    linksRef,
    {
      opacity: 0,
      yPercent: 50,
      filter: "blur(8px)",
    },
    {
      opacity: 1,
      yPercent: 0,
      filter: "blur(0px)",
      duration: 1,
      stagger: 0.2,
    },
  );
};

export const animateSocials = (
  socialsRef: MutableRefObject<(HTMLDivElement | null)[]>,
) => {
  return gsap.fromTo(
    socialsRef.current,
    {
      opacity: 0,
      rotateX: -45,
      yPercent: 50,
      filter: "blur(8px)",
    },
    {
      opacity: 1,
      yPercent: 0,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.2,
    },
  );
};

export const startHeroAnimations = (
  upperRef: MutableRefObject<HTMLHeadingElement | null>,
  middleRef: MutableRefObject<HTMLHeadingElement | null>,
  lowerRef: MutableRefObject<HTMLHeadingElement | null>,
  badgeRef: MutableRefObject<HTMLDivElement | null>,
  // badgeImageRef: MutableRefObject<HTMLImageElement | null>,
  upperContainerRef: MutableRefObject<HTMLDivElement | null>,
  lowerContainerRef: MutableRefObject<HTMLDivElement | null>,
  titleContainerRef: MutableRefObject<HTMLDivElement | null>,
  { isMobile, onComplete }: { isMobile: boolean; onComplete: () => void },
) => {
  // gsap.timeline().add(slideIn()).add(activateNavLink());
  const tl = gsap.timeline({ onComplete: onComplete });

  tl.add(
    gsap.fromTo(
      [upperRef.current, middleRef.current, lowerRef.current],
      {
        yPercent: 100,
        duration: 2,
      },
      {
        delay: 1,
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
          opacity: 0,
          rotateX: -40,
          duration: 2,
          filter: "blur(15px)",
        },
        {
          opacity: 1,
          rotateX: 0,
          stagger: 0.2,
          duration: 2.5,
          filter: "blur(0px)",
          ease: "expo.out",
        },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        badgeRef.current,
        { yPercent: 50, xPercent: -10, opacity: 0, filter: "blur(8px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 1 },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        ["#short-bio", "#short-note"],
        { yPercent: 50, opacity: 0, filter: "blur(8px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      ),
      "<",
    );

  if (!isMobile) {
    tl.add(
      gsap.to(upperContainerRef.current, {
        duration: 1,
        xPercent: -20,
        ease: "power4.out",
      }),
      "-=2",
    ).add(
      gsap.to(lowerContainerRef.current, {
        xPercent: 10,
        duration: 1,
        ease: "power4.out",
      }),
      "<",
    );
  }

  tl.add(
    gsap.to(badgeRef.current, { xPercent: isMobile ? -10 : 10, duration: 0.5 }),
    "<",
  ).add(
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
            { isMobile },
          );
          sectionFadeAnimate();
        },
      },
    ),
    "<",
  );

  return tl;
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
  { isMobile }: { isMobile: boolean },
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleContainerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.add(
    gsap.fromTo(
      upperContainerRef.current,
      { xPercent: isMobile ? 0 : -20 },
      { xPercent: isMobile ? -20 : -30 },
    ),
  )
    .add(
      gsap.fromTo(
        lowerContainerRef.current,
        { xPercent: isMobile ? 0 : 10 },
        { xPercent: isMobile ? 10 : 20 },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        badgeRef.current,
        { scale: 1 },
        { scale: 1.2, xPercent: -10, yPercent: 10 },
      ),
      "<",
    );
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
