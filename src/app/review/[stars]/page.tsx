"use client";
import * as utils from "~/utils/utils";
import ReviewForm from "./form";

const ReviewPage = ({ params: { stars } }: { params: { stars: number } }) => {
  return <ReviewForm stars={utils.clamp(isNaN(stars) ? 0 : stars, 1, 5)} />;
};

export default ReviewPage;
