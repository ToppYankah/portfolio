"use client";
import gsap from "gsap";
import { MutableRefObject } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatePointer = (clientX: number, clientY: number) => {
  const bounds = document
    .getElementById("custom-pointer")
    ?.getBoundingClientRect();

  const halfWidth = window.innerWidth * 0.5,
    halfHeight = window.innerHeight * 0.5,
    halfPHeight = (bounds?.height ?? 0) * 0.5,
    halfPWidth = (bounds?.width ?? 0) * 0.5;

  gsap.to("#custom-pointer", {
    ease: "none",
    duration: 0,
    x: clientX - (halfWidth + halfPWidth),
    y: clientY - (halfHeight + halfPHeight),
  });
};

export const animateSectionTitle = () => {
  return gsap
    .timeline({
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: ".title-container",
        start: "bottom 80%",
      },
    })
    .add(
      gsap.fromTo(
        ".text-char",
        {
          opacity: 0,
          rotateX: -40,
          yPercent: 100,
          filter: "blur(15px)",
        },
        {
          opacity: 1,
          rotateX: 0,
          yPercent: 0,
          duration: 0.5,
          stagger: 0.04,
          filter: "blur(0px)",
          ease: "expo.out",
        },
      ),
    );
};

export const animateRotatingBadge = (
  imageRef: MutableRefObject<HTMLImageElement | null>,
) => {
  return gsap.to(imageRef.current, {
    rotate: 360,
    repeat: -1,
    duration: 10,
    ease: "none",
  });
};

export function upscaleRotatingLetters(
  badgeImageRef: MutableRefObject<HTMLImageElement | null>,
) {
  return gsap.to(badgeImageRef.current, {
    scale: 1.05,
    duration: 0.5,
    ease: "back.out",
  });
}

export function downscaleRotatingLetters(
  badgeImageRef: MutableRefObject<HTMLImageElement | null>,
) {
  return gsap.to(badgeImageRef.current, {
    scale: 1,
    duration: 0.5,
    ease: "expo.out",
  });
}

export function toggleFloatingMemojiAnimation(
  floatingBadgeRef: MutableRefObject<HTMLDivElement | null>,
) {
  return gsap.fromTo(
    floatingBadgeRef.current,
    {
      opacity: 0,
      scale: 0.5,
    },
    {
      scale: 1,
      opacity: 1,
      yoyo: true,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: "#hero",
        start: "bottom top",
        end: "bottom -50",
        scrub: true,
      },
    },
  );
}

export function animateAvailableForWork() {
  return gsap.to(".part", {
    xPercent: -100,
    repeat: -1,
    duration: 8,
    ease: "none",
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: "#reviews",
    },
  });
}

export function animateModalLabel() {
  return gsap.fromTo(
    ".modal-label span",
    { y: 30, filter: "blur(20px)" },
    { y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.5 },
  );
}

export function animateModalContent() {
  return gsap.fromTo(
    ".content *",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.03, duration: 0.5 },
  );
}
