import { CheckIcon } from "@heroicons/react/24/solid";
import { useId, useState } from "react";
import { FormFieldProps } from "~/types";

const Checkbox = ({
  label,
  name,
  register,
  valueAsNumber,
  ...props
}: { label: string } & FormFieldProps) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <input
        {...props}
        type="checkbox"
        className="sr-only"
        id={`checkbox-${id}`}
        {...register(name, { valueAsNumber })}
        onChange={({ target: { checked } }) => setIsChecked(checked)}
      />
      <label
        htmlFor={`checkbox-${id}`}
        className="flex cursor-pointer items-center gap-3 text-sm text-opacity-55"
      >
        <div
          onClick={() => setIsChecked(!isChecked)}
          className={`grid h-5 w-5 cursor-pointer place-content-center rounded-md bg-black dark:bg-white ${isChecked ? "bg-opacity-100 dark:bg-opacity-100" : "bg-opacity-10 dark:bg-opacity-20"}`}
        >
          <CheckIcon
            className={`${isChecked ? "text-inverted" : "text-transparent"}`}
            width={15}
          />
        </div>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
