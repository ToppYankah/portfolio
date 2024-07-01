"use client";
import { useId, useLayoutEffect } from "react";
import { FormFieldProps } from "~/types";
import { FormFieldError } from "./FormFieldError";

const TextArea = ({
  name,
  error,
  label,
  register,
  className,
  labelError,
  placeholder,
  maxRows = 20,
  valueAsNumber,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  className?: string;
  maxRows?: number;
} & FormFieldProps) => {
  const id = useId();

  useLayoutEffect(() => {
    const textareaElement = document.getElementById(id);

    if (textareaElement === null) return;

    textareaElement.style.height = "auto";
    textareaElement.style.height = "calc(1.5em + 24px)";

    const adjustTextareaHeight = () => {
      textareaElement.style.height = "auto";
      textareaElement.style.height = `min(calc(${maxRows} * 1.5em), ${textareaElement.scrollHeight}px)`;
    };

    textareaElement?.addEventListener("input", adjustTextareaHeight);

    return () => {
      textareaElement?.removeEventListener("input", adjustTextareaHeight);
    };
  }, [id]);

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <div className="flex items-center gap-2">
          <h5 className="text-sm font-semibold leading-[1em]">{label}</h5>
          {labelError && (
            <FormFieldError
              useMargin={false}
              error={labelError.root || labelError}
            />
          )}
        </div>
      )}
      <textarea
        id={id}
        {...props}
        aria-multiline
        data-lenis-prevent
        {...register(name)}
        placeholder={placeholder}
        style={{resize: "none"}}
        className={`w-full border-b border-b-gray-200 border-transparent bg-color p-3 text-sm focus:border-inverted focus:outline-none dark:border-b-white/10 ${className}`}
        // className={`block max-h-[350px] min-h-[250px] w-full overflow-hidden rounded-2xl border-2 border-transparent bg-gray-100 p-3 text-sm focus:border-inverted focus:outline-none dark:border-white/5 dark:bg-white dark:bg-opacity-[0.07] ${className}`}
      />
      {error && <FormFieldError error={error} />}
    </div>
  );
};

export default TextArea;
