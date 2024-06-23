"use client";
import gsap from "gsap";
import { MutableRefObject } from "react";

export const animateLogo = () => {
  return gsap.fromTo(
    ".logo-char",
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

export const animatePortfolioDate = () => {
  return gsap.fromTo(
    [".portfolio-text", ".date-text"],
    {
      opacity: 0,
      rotateX: -50,
      yPercent: 100,
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

export const animateLinks = () => {
  return gsap.fromTo(
    ".link-item",
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

export const animateSocials = () => {
  return gsap.fromTo(
    ".social-item",
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

export const startHeroAnimations = ({
  isMobile,
  onComplete,
}: {
  isMobile: boolean;
  onComplete: () => void;
}) => {
  const tl = gsap.timeline({ onComplete: onComplete });

  tl.add(
    gsap.fromTo(
      [".title-upper", ".title-middle", ".title-lower"],
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        stagger: 0.2,
        duration: 2,
        ease: "expo.out",
      },
    ),
  )
    .add(
      gsap.fromTo(
        [".title-upper", ".title-middle", ".title-lower"],
        {
          opacity: 0,
          rotateX: -40,
          filter: "blur(30px)",
        },
        {
          opacity: 1,
          rotateX: 0,
          stagger: 0.2,
          duration: 2,
          filter: "blur(0px)",
          ease: "expo.out",
        },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        ".title-badge",
        { yPercent: 50, xPercent: -10, opacity: 0, filter: "blur(8px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 1 },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        [".title-short-bio", ".title-short-note"],
        { yPercent: 50, opacity: 0, filter: "blur(8px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      ),
      "<",
    );

  if (!isMobile) {
    tl.add(
      gsap.to(".title-upper-container", {
        duration: 1,
        xPercent: -20,
        ease: "power4.out",
      }),
      "-=1.5",
    ).add(
      gsap.to(".title-lower-container", {
        xPercent: 10,
        duration: 1,
        ease: "power4.out",
      }),
      "<",
    );
  }

  tl.add(
    gsap.to(".title-badge", {
      xPercent: isMobile ? -10 : 10,
      duration: 0.5,
      onComplete: () => {
        onComplete();
        heroScrollAnimate(isMobile);
      },
    }),
    "<",
  );

  return tl;
};

const heroScrollAnimate = (isMobile: boolean) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: "#hero-title",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.add(gsap.to(".title-upper-container", { xPercent: isMobile ? -20 : -30 }))
    .add(
      gsap.to(".title-lower-container", { xPercent: isMobile ? 10 : 20 }),
      "<",
    )
    .add(
      gsap.to(".title-badge", { scale: 1.2, xPercent: -10, yPercent: 10 }),
      "<",
    );
};

export function animateHeroScrollIndicator() {
  return gsap.fromTo(
    ".indicator-wrapper",
    { yPercent: -100 },
    {
      yPercent: 0,
      duration: 1,
      delay: 2,
    },
  );
}

export function animateHeroScrollIndicatorArrows() {
  return gsap.fromTo(
    ".scroll-down-arrow",
    { yPercent: 0 },
    { yPercent: 100, repeat: -1, duration: 0.5, ease: "none" },
  );
}
