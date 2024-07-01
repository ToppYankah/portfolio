"use client";
import { ArrowUpRightIcon, StarIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import * as actions from "~/actions";
import Checkbox from "~/components/Checkbox";
import FormSubmitterView from "~/components/FormSubmitterView";
import Input from "~/components/Input";
import Magnetic from "~/components/Magnetic";
import TextArea from "~/components/TextArea";
import { useRating } from "~/context/rating-context";
import useFormSubmitter from "~/hooks/form-submitter";
import { ReviewFormData } from "~/interfaces/interfaces";

const reviewSchema: ZodType<ReviewFormData> = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(2, { message: "Name must be at least 2 characters" }),
  profession: z
    .string({
      required_error: "Please enter your profession",
    })
    .min(2, { message: "Profession must be at least 2 characters" }),
  company: z
    .string({
      required_error: "Please enter your company",
    })
    .min(2, { message: "Company must be at least 2 characters" }),
  comment: z.string().min(1, { message: "Please write a comment" }),
  shouldPost: z.boolean().default(false).optional(),
});

export default function ReviewForm({ ratingValue }: { ratingValue: number }) {
  const { rating, setRating } = useRating();
  const { data, formId, handleSubmit: handleFormSubmit } = useFormSubmitter();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
  });

  useEffect(() => {
    setRating(ratingValue);
  }, [ratingValue]);

  const onSubmit = async (value: ReviewFormData) => {
    const successful = await handleFormSubmit(async () => {
      await actions.addReview(ratingValue, value);
    });

    if (successful) return reset();
  };

  return (
    <div className="flex max-w-[600px] flex-col">
      <h1 className="font-serif text-[clamp(30px,4vw,50px)] capitalize leading-[1.1em]">
        Glad to Hear <br /> Your Thoughts!
      </h1>
      <p className="mt-3 text-sm opacity-70">
        Write your honest review about your experience below
      </p>
      <form
        id={formId}
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-10 py-2"
      >
        <div className="mb-3 flex items-center justify-end gap-5">
          <div className="itemc-center flex gap-2 overflow-hidden rounded-full bg-gray-100 p-1 pl-3 dark:bg-white/10">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Magnetic
                    key={"rating-" + i}
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
        <div className="mb-10">
          <Input
            type="text"
            name="name"
            error={errors.name}
            register={register}
            placeholder="May I know your name?"
          />
        </div>
        <div className="mb-10 flex gap-4">
          <Input
            name="profession"
            register={register}
            placeholder="What's your profession?"
            error={errors.profession}
            containerClassName="flex-1"
            type="text"
          />
          <Input
            name="company"
            register={register}
            placeholder="At which company?"
            error={errors.company}
            containerClassName="flex-1"
            type="text"
          />
        </div>
        <TextArea
          name="comment"
          register={register}
          error={errors.comment}
          placeholder="Pleased to know your thought 💭..."
        />
        <div className="mt-20 flex py-5">
          <Checkbox
            name="shouldPost"
            register={register}
            label="Check to consider displaying your review to public"
          />
        </div>
        <div className="mt-2 flex flex-wrap justify-end gap-3 sm:gap-5">
          <button className="flex flex-1 justify-between whitespace-nowrap bg-black font-semibold capitalize text-inverted dark:bg-accent-deep dark:text-inverted">
            Submit Review <ArrowUpRightIcon width={20} />
          </button>
        </div>
      </form>
      <FormSubmitterView
        data={data}
        formId={formId}
        message="Submitting your review"
      />
    </div>
  );
}
