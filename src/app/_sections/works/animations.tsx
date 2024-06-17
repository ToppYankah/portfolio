import gsap from "gsap";
import { MutableRefObject } from "react";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export function animateSectionItems({ total }: { total: number }) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "top -=30%",
        end: "bottom 130%",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".section-items-wrapper",
        { translateX: 0 },
        { translateX: `${-(total * 65 + 100)}vw` },
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
      gsap.fromTo(
        ".scroll-indicator",
        { yPercent: 100 },
        {
          xPercent: 50,
          onComplete: () => {
            animateProjectElementsReveal();
          },
        },
      ),
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

export function animateProjectTagReveal(
  tagsRef: MutableRefObject<(HTMLParagraphElement | null)[]>,
) {
  return gsap.to(tagsRef.current, {
    rotateX: 0,
    filter: "blur(0px)",
    translateY: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.5,
  });
}

export function animateProjectNameReveal(
  nameCharsRef: MutableRefObject<(HTMLSpanElement | null)[]>,
) {
  return gsap.to(nameCharsRef.current, {
    rotateX: 0,
    filter: "blur(0px)",
    translateY: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
  });
}

export function animateProjectCoverImageParallax(
  imageRef: MutableRefObject<HTMLImageElement | null>,
  index: number,
) {
  const offset = index * 55;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: `top -=30%`,
        end: `top -=${100 + offset * 1.5}%`,
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        imageRef.current,
        { scale: 1.25, xPercent: 10 },
        { xPercent: -10 },
      ),
    );
}

export function animateConclusionHeading(
  titleRefs: MutableRefObject<(HTMLHeadingElement | null)[]>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "bottom 400%",
        end: "bottom 140%",
        scrub: true,
      },
    })
    .add(gsap.fromTo(titleRefs.current, { xPercent: -50 }, { xPercent: 0 }));
}

export function animateFinalScrollIndicator(
  pathRef: MutableRefObject<SVGPathElement | null>,
  rectRef: MutableRefObject<SVGRectElement | null>,
  ellipseRef: MutableRefObject<SVGEllipseElement | null>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "bottom 140%",
        end: "bottom 100%",
        scrub: true,
      },
    })
    .add(
      gsap.to(rectRef.current, {
        motionPath: {
          align: pathRef.current || undefined,
          path: pathRef.current || undefined,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
      }),
    )
    .add(
      gsap.to(ellipseRef.current, {
        motionPath: {
          align: pathRef.current || undefined,
          path: pathRef.current || undefined,
          alignOrigin: [0.5, 0],
        },
        ease: "none",
      }),
      "<",
    );
}
