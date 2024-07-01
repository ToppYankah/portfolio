import { FormFieldProps } from "~/types";
import { FormFieldError } from "./FormFieldError";

const Input = ({
  name,
  error,
  label,
  register,
  className,
  labelError,
  placeholder,
  valueAsNumber,
  containerClassName,
  ...props
}: { containerClassName?: string; className?: string } & FormFieldProps) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <div className=" flex items-center gap-2">
          <h5 className="text-sm font-semibold leading-[1em]">{label}</h5>
          {labelError && (
            <FormFieldError
              useMargin={false}
              error={labelError.root || labelError}
            />
          )}
        </div>
      )}
      <input
        {...props}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className={`w-full border-b border-b-gray-200 border-transparent bg-color p-3 text-sm focus:border-inverted focus:outline-none dark:border-b-white/10 ${className}`}
      />
      {error && <FormFieldError error={error.root || error} />}
    </div>
  );
};

export default Input;
