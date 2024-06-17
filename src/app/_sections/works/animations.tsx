import gsap from "gsap";
import { MutableRefObject } from "react";

export function animateSectionItems({ total }: { total: number }) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "top -=30%",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".section-items-wrapper",
        { translateX: 0 },
        { translateX: `${-(total * 65)}vw` },
      ),
    );
}

export function animateScrollBall() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".svgScope",
        start: "top bottom",
      },
    })
    .add(
      gsap.to(".scroll-ball", {
        yPercent: -130,
        repeat: -1,
        duration: 2,
        ease: "power4.out",
        repeatRefresh: false,
      }),
    );
}

export function animateSectionTitle() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".upper",
        start: "top bottom",
        end: "bottom 30%",
        scrub: true,
      },
    })
    .add(gsap.from(".middle", { xPercent: 5 }))
    .add(gsap.from(".upper", { xPercent: 15 }), "<")
    .add(gsap.from(".lower", { xPercent: 8 }), "<");
}

export function animateProjectElementsSneak() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".work-item .cover-image",
        { xPercent: 0, rotate: 0 },
        {
          xPercent: -55,
          rotate: -20,
        },
      ),
    );
}

export function animateScrollIndicator() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "top top",
        end: "top -=30%",
        scrub: true,
      },
    })
    .add(
      gsap.to(".scroll-indicator", {
        xPercent: 50,
        onComplete: () => {
          animateProjectElementsReveal();
        },
      }),
    );
}

export function animateProjectElementsReveal() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "top -=30%",
        end: "top -=70%",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".work-item .cover-image",
        {
          xPercent: -55,
          rotate: -20,
        },
        {
          xPercent: 0,
          rotate: 0,
        },
      ),
    );
}

export function animateProjectNameReveal(
  nameCharsRef: MutableRefObject<(HTMLSpanElement | null)[]>,
  index: number,
) {
  const offset = index * 55;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: `top -=${offset}%`,
        end: `top -=${offset * 1.2}%`,
      },
    })
    .add(
      gsap.fromTo(
        nameCharsRef.current,
        { rotateX: -45, filter: "blur(12px)", yPercent: 150, opacity: 0 },
        {
          rotateX: 0,
          filter: "blur(0px)",
          yPercent: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
        },
      ),
    );
}

export function animateProjectTagReveal(
  nameCharsRef: MutableRefObject<(HTMLParagraphElement | null)[]>,
  index: number,
) {
  const offset = index * 55;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: `top -=${offset}%`,
        end: `top -=${offset * 1.2}%`,
      },
    })
    .add(
      gsap.fromTo(
        nameCharsRef.current,
        { rotateX: -45, filter: "blur(12px)", yPercent: 150, opacity: 0 },
        {
          rotateX: 0,
          filter: "blur(0px)",
          yPercent: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
        },
      ),
    );
}
