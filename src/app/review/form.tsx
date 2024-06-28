"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import Checkbox from "~/components/Checkbox";
import Input from "~/components/Input";
import Magnetic from "~/components/Magnetic";
import TextArea from "~/components/TextArea";
import { useRating } from "~/context/rating-context";

export default function ReviewForm({ ratingValue }: { ratingValue: number }) {
  const { rating, setRating } = useRating();

  useEffect(() => {
    setRating(ratingValue);
  }, [ratingValue]);

  return (
    <div className="flex flex-col">
      <h1 className="font-serif text-[clamp(30px,4vw,35px)] capitalize leading-[1.1em]">
        Would you like to add <br /> a comment? 🙂
      </h1>
      <p className="mt-3 text-sm opacity-70">
        Write your honest review about your experience below
      </p>
      <div className="mb-5 mt-5 flex items-center justify-end gap-5">
        <div className="itemc-center flex gap-2 overflow-hidden rounded-full bg-gray-100 p-1 pl-3 dark:bg-white/10">
          <div className="flex gap-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Magnetic
                  className="cursor-pointer"
                  onClick={() => setRating(i + 1)}
                >
                  <StarIcon
                    key={i}
                    width={16}
                    color={rating >= i + 1 ? "orange" : "gray"}
                  />
                </Magnetic>
              ))}
          </div>
          <span className="grid min-h-9 min-w-9 place-content-center rounded-full bg-gray-200 text-xs font-bold dark:bg-white/10">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="mb-5">
        <Input placeholder="May I know your name?" />
      </div>
      <div className="mb-5 flex gap-5">
        <Input placeholder="What's your profession?" className="flex-1" />
        <Input placeholder="At which company?" className="flex-1" />
      </div>
      <TextArea placeholder="Pleased to know your thought 💭..." />

      <div className="flex py-5">
        <Checkbox label="Consider and display my review" />
      </div>
      <div className="mt-2 flex flex-wrap justify-end gap-3 sm:gap-5">
        <button className="flex-1 whitespace-nowrap bg-black bg-opacity-10 capitalize dark:bg-white dark:bg-opacity-10">
          Submit Rating only
        </button>
        <button className="flex-1 whitespace-nowrap bg-black capitalize text-inverted dark:bg-accent-deep dark:text-inverted">
          Submit Rating with Comment
        </button>
      </div>
    </div>
  );
}
