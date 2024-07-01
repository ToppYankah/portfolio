"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";
import ReviewItem from "./components/ReviewItem";
import VisitorRate from "./components/VisitorRate";
import { reviews } from "./sample_data";

export default function ReviewSection() {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const dragSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.slideInReviews();
      animations.slideInVisitorRating();
      animations.animateDragReviewsTo(dragSectionRef);
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="overflow-hidden">
      <SectionLayout
        id="review"
        containerclassname="py-52 pb-32"
        className="flex flex-col justify-center"
      >
        <div className="flex flex-wrap justify-between gap-5">
          <SectionTitle label="Client Reviews">
            Reviews&nbsp;from\nMy&nbsp;Honorable\nClients
          </SectionTitle>
          <VisitorRate />
        </div>
        <div
          ref={dragSectionRef}
          data-pointer-grow
          data-pointer-text="Drag"
          className="bg-red reviews-container cursor-grab active:cursor-grabbing mt-28"
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
