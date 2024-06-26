"use client";
import Modal from "~/components/Modal";
import ReviewForm from "~/app/review/[stars]/form";
import * as utils from "~/utils/utils";

const ReviewModal = ({ params: { stars } }: { params: { stars: number } }) => {
  return (
    <Modal>
      <ReviewForm stars={utils.clamp(stars, 1, 5)} />
    </Modal>
  );
};

export default ReviewModal;
