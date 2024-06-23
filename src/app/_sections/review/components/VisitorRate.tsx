import { ForwardedRef, forwardRef, useState } from "react";
import {
  SupportLikeQuestionStar1Bold,
  SupportLikeQuestionStarOutline,
} from "react-icons-sax";
import Magnetic from "~/components/Magnetic";
import { useModal } from "~/context/modal-context";
import ReviewModal from "./ReviewModal";

const VisitorRate = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const [rate, setRate] = useState<number>(0);
  const { showModal } = useModal();

  const handleSubmitRating = () => {
    showModal(<ReviewModal rating={rate} />, "Review");
  };

  return (
    <div
      ref={ref}
      className="visitor-rating ml-auto flex min-w-[300px] max-w-[clamp(200px,20vw,400px)] flex-col justify-end gap-2 pb-4"
    >
      <p className="text-sm">
        How would you rate my works so far based on your experience?
      </p>
      <div className="flex items-center gap-2">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarItem
              key={"star-" + i}
              highlight={rate >= i + 1}
              onSelect={() => setRate(i + 1)}
            />
          ))}
        <div className="h-[1px] flex-1 bg-inverted" />
        <Magnetic>
          <div
            onClick={handleSubmitRating}
            className={`leading-1em cursor-pointer rounded-full ${rate < 1 ? "pointer-events-none bg-accent opacity-70" : "bg-inverted"}`}
          >
            <p
              className={`px-3 py-2 text-xs font-bold leading-[1em] ${rate < 1 ? "" : "text-inverted"}`}
            >
              submit
            </p>
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

const StarItem = ({
  onSelect,
  highlight,
}: {
  onSelect: () => void;
  highlight: boolean;
}) => {
  return (
    <Magnetic>
      <div onClick={onSelect} className="relative cursor-pointer">
        <SupportLikeQuestionStarOutline
          size={18}
          className={`${highlight ? "text-orange-500" : ""}`}
        />
        <SupportLikeQuestionStar1Bold
          size={18}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${highlight ? "" : "opacity-0"} text-orange-500`}
        />
      </div>
    </Magnetic>
  );
};

export default VisitorRate;
