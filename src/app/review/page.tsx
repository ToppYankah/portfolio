"use client";
import * as utils from "~/utils/utils";
import ReviewForm from "./form";

const ReviewPage = ({
  searchParams: { rating },
}: {
  searchParams: { rating?: number };
}) => {
  return <ReviewForm ratingValue={utils.clamp(rating || 5, 1, 5)} />;
};

export default ReviewPage;
