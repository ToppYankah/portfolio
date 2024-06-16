import gsap from "gsap";
import { MutableRefObject } from "react";

export function animateScreenOutlines(
  mainScreenRef: React.RefObject<SVGSVGElement>,
  screenOutline1Ref: React.RefObject<SVGRectElement>,
  screenOutline2Ref: React.RefObject<SVGRectElement>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: screenOutline1Ref.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        mainScreenRef.current,
        { rotateY: 0, rotateX: 0 },
        { rotateY: 40, rotateX: 0 },
      ),
    )
    .add(
      gsap.fromTo(
        screenOutline1Ref.current,
        {
          yPercent: 0,
          xPercent: 0,
        },
        {
          yPercent: -15,
          xPercent: 10,
        },
      ),
      "<",
    )
    .add(
      gsap.fromTo(
        screenOutline2Ref.current,
        {
          yPercent: 0,
          xPercent: 0,
        },
        {
          yPercent: -30,
          xPercent: 20,
        },
      ),
      "<",
    );
}

export function animateExpertiseItems(
  scopeRef: MutableRefObject<HTMLDivElement | null>,
  expertiseItemsRef: MutableRefObject<(HTMLDivElement | null)[]>,
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: scopeRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        expertiseItemsRef.current,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          stagger: 0.25,
        },
      ),
    );
}

export const animateTopShape = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
) => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    })
    .add(gsap.to("svg.main", { opacity: 0.08, scale: 0.95 }), "<")
    .add(
      gsap.to("svg.mid", {
        xPercent: 20,
        yPercent: 10,
        opacity: 0.2,
        scale: 0.98,
      }),
      "<",
    )
    .add(gsap.to("svg.top", { xPercent: 50, yPercent: 20, opacity: 0.5 }), "<");
};

export const animateBottomShape = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
) => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    })
    .add(gsap.to("svg.main", { opacity: 0.08 }), "<")
    .add(gsap.to("svg.mid", { xPercent: -20, yPercent: 10, opacity: 0.2 }), "<")
    .add(
      gsap.to("svg.top", { xPercent: -50, yPercent: 20, opacity: 0.5 }),
      "<",
    );
};
