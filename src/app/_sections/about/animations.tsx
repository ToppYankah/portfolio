"use client";
import gsap from "gsap";
import { MutableRefObject } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export function animateImageBanner(
  imageContainerRef: MutableRefObject<HTMLDivElement | null>,
  imageRef: MutableRefObject<HTMLImageElement | null>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -10,
        },
        {
          yPercent: 100,
          ease: "none",
        },
      ),
    )
    .add(
      gsap.fromTo(
        imageContainerRef.current,
        {
          yPercent: 10,
        },
        {
          yPercent: -35,
          ease: "none",
        },
      ),
      "<",
    );
}

export function animateRotatingStar(
  rotatingStarRef: MutableRefObject<SVGSVGElement | null>,
) {
  return gsap.to(rotatingStarRef.current, {
    rotate: 360,
    duration: 1,
    repeat: -1,
    ease: "none",
  });
}

export function animateBioText(
  bioTextRef: MutableRefObject<HTMLDivElement | null>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "50% 30%",
        scrub: true,
      },
    })
    .fromTo(
      bioTextRef.current,
      {
        yPercent: 50,
      },
      {
        yPercent: 0,
        ease: "none",
      },
    );
}

export function animatePersonalInfo(
  personalInfoRefs: MutableRefObject<
    (HTMLSpanElement | HTMLHeadingElement | HTMLDivElement | null)[]
  >,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "50% 30%",
        scrub: true,
      },
    })
    .fromTo(
      personalInfoRefs.current,
      {
        yPercent: 10,
      },
      {
        yPercent: -20,
        stagger: 0.1,
        ease: "none",
      },
    );
}

export function animateShortBio(
  shortBioRef: MutableRefObject<HTMLDivElement | null>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom 90%",
        scrub: true,
      },
    })
    .fromTo(
      shortBioRef.current,
      {
        yPercent: -10,
      },
      {
        yPercent: 0,
        duration: 1,
      },
    );
}

export function animateArrowLine(
  svgBoxRef: MutableRefObject<SVGSVGElement | null>,
  arrowPathRef: MutableRefObject<SVGPathElement | null>,
  arrowHeadRef: MutableRefObject<SVGPathElement | null>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: svgBoxRef.current,
        start: "10% 98%",
        end: "top 25%",
        scrub: true,
      },
    })
    .to(arrowHeadRef.current, {
      motionPath: {
        align: arrowPathRef.current || undefined,
        path: arrowPathRef.current || undefined,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
    });
}
