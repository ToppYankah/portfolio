"use client";
import Modal from "~/components/Modal";
import ReviewForm from "~/app/review/form";
import * as utils from "~/utils/utils";

const ReviewModal = ({
  searchParams: { rating },
}: {
  searchParams: { rating?: number };
}) => {
  return (
    <Modal>
      <ReviewForm ratingValue={utils.clamp(rating || 5, 1, 5)} />
    </Modal>
  );
};

export default ReviewModal;
