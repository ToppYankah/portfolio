import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
import { MutableRefObject } from "react";

gsap.registerPlugin(Draggable);

export const slideInReviews = () => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#review",
        start: "top 40%",
        end: "top top",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        ".review-item",
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.2,
        },
      ),
    );
};

export const slideInVisitorRating = () => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#review",
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
    })
    .add(gsap.from(".visitor-rating", { xPercent: 100 }));
};

export const animateDragReviewsTo = (
  draggableRef: MutableRefObject<HTMLDivElement | null>,
) => {
  Draggable.create(".drag-sheet", {
    type: "x",
    bounds: {
      maxX: 0,
      minX:
        (draggableRef.current?.getBoundingClientRect().width || 0) -
        (draggableRef.current?.firstElementChild?.scrollWidth || 0),
    },
    inertia: true,
    zIndexBoost: false,
  });
};
