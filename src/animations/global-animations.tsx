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
          delay: 0.5,
          yPercent: 0,
          duration: 2,
          stagger: 0.05,
          filter: "blur(0px)",
          ease: "expo.out",
        },
      ),
    );
};
