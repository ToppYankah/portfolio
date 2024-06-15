"use client";
import gsap from "gsap";
import { MutableRefObject } from "react";

export const animatePointer = (
  pointerRef: MutableRefObject<HTMLDivElement>,
  clientX: number,
  clientY: number,
) => {
  const { width, height } = pointerRef?.current?.getBoundingClientRect();

  const halfWidth = window.innerWidth * 0.5,
    halfHeight = window.innerHeight * 0.5,
    halfPHeight = height * 0.5,
    halfPWidth = width * 0.5;

  gsap.to(pointerRef?.current, {
    ease: "none",
    duration: -1,
    x: clientX - (halfWidth + halfPWidth),
    y: clientY - (halfHeight + halfPHeight),
  });
};

export const animateSectionTitle = (
  containerRef: MutableRefObject<
    (HTMLDivElement | null)[] | HTMLDivElement | null
  >,
  textCharsRef: MutableRefObject<(HTMLSpanElement | null)[]>,
) => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 70%",
        end: "top 0%",
      },
    })
    .add(
      gsap.fromTo(
        textCharsRef.current,
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
          duration: 1,
          stagger: 0.05,
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
        trigger: "#hero",
        start: "bottom top",
        end: "bottom -50",
        scrub: true,
      },
    },
  );
}
