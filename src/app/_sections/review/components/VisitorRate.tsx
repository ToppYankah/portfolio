import Link from "next/link";
import { ForwardedRef, forwardRef, useState } from "react";
import Magnetic from "~/components/Magnetic";
import { StarIcon as StarIconBold } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { useRating } from "~/context/rating-context";

const VisitorRate = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { rating, setRating } = useRating();

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
              highlight={rating >= i + 1}
              onSelect={() => setRating(i + 1)}
            />
          ))}
        <div className="h-[1px] flex-1 bg-inverted" />
        <Magnetic>
          <div
            className={`leading-1em cursor-pointer rounded-full ${rating < 1 ? "pointer-events-none bg-accent opacity-70" : "bg-inverted"}`}
          >
            <Link href={`/review/${rating}`} passHref>
              <p
                className={`px-3 py-2 text-xs font-bold leading-[1em] ${rating < 1 ? "" : "text-inverted"}`}
              >
                submit
              </p>
            </Link>
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
        <StarIconOutline
          width={20}
          className={`${highlight ? "text-orange-500" : ""}`}
        />
        <StarIconBold
          width={20}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${highlight ? "" : "opacity-0"} text-orange-500`}
        />
      </div>
    </Magnetic>
  );
};

export default VisitorRate;
