"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";

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
