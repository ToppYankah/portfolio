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
