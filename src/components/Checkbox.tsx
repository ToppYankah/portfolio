import { CheckIcon } from "@heroicons/react/24/solid";
import { useId, useState } from "react";

const Checkbox = ({ label }: { label: string }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-3 text-sm">
      <input
        type="checkbox"
        className="hidden"
        name={`checkmark-${id}`}
        id={`checkmark-${id}`}
        value={isChecked.toString()}
        onChange={({ target: { checked } }) => setIsChecked(checked)}
      />
      <div
        onClick={() => setIsChecked(!isChecked)}
        className={`grid place-content-center h-5 w-5 cursor-pointer rounded-md bg-black dark:bg-white ${isChecked ? "bg-opacity-100 dark:bg-opacity-100" : "bg-opacity-10 dark:bg-opacity-20"}`}
      >
        <CheckIcon
          className={`${isChecked ? "text-inverted" : "text-transparent"}`}
          width={15}
        />
      </div>
      <label htmlFor={`checkmark-${id}`} className="cursor-pointer opacity-70">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
