import Checkbox from "~/components/Checkbox";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";

export default function ReviewModal({ rating }: { rating: number }) {
  return (
    <>
      <h1 className="font-serif text-[clamp(30px,4vw,35px)] capitalize leading-[1.1em]">
        Would you like to add <br /> a comment? 🙂
      </h1>
      <p className="mb-8 mt-3 text-sm opacity-60">
        Write your honest review about your experience below
      </p>
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
      <div className="mt-2 flex justify-end gap-3 sm:gap-5 flex-wrap">
        <button className="flex-1 bg-black bg-opacity-10 capitalize dark:bg-white dark:bg-opacity-10 whitespace-nowrap">
          Submit Rating only
        </button>
        <button className="flex-1 bg-black capitalize text-inverted dark:bg-white dark:text-inverted whitespace-nowrap">
          Submit Rating with Comment
        </button>
      </div>
    </>
  );
}
