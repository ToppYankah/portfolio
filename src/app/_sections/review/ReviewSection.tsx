"use client";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import { PointerContext } from "~/context/custom-pointer-context";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";
import VisitorRate from "./components/VisitorRate";
import { reviews } from "./sample_data";
import ReviewItem from "./components/ReviewItem";

export default function ReviewSection() {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const { setHoveredLink } = useContext(PointerContext);
  const dragSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.slideInReviews();
      animations.slideInVisitorRating();
      animations.animateDragReviewsTo(dragSectionRef);
    },
    { scope: scopeRef },
  );

  const handleMouseEnter = () => setHoveredLink(true, "Drag");

  const handleMouseLeave = () => setHoveredLink(false, null);

  return (
    <div ref={scopeRef} className="overflow-hidden">
      <SectionLayout
        id="review"
        className="flex flex-col justify-center"
        containerclassname="py-52"
      >
        <div className="flex flex-wrap justify-between gap-5">
          <SectionTitle label="Client Reviews">
            Reviews&nbsp;from\nMy&nbsp;Honorable\nClients
          </SectionTitle>
          <VisitorRate />
        </div>
        <div
          ref={dragSectionRef}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="bg-red reviews-container mt-20 cursor-grab active:cursor-grabbing"
        >
          <div className="drag-sheet flex gap-[clamp(20px,10%,50px)]">
            {reviews.map((review, index) => (
              <ReviewItem review={review} key={"review-" + index} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
