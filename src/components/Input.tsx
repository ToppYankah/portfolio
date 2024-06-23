import { HTMLAttributes } from "react";

const Input = ({
  className,
  placeholder,
  ...props
}: { placeholder: string } & HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={`w-full rounded-2xl border-2 border-transparent bg-gray-100 p-3 text-sm dark:border-white/5 focus:outline-none dark:bg-white dark:bg-opacity-[0.07] focus:border-inverted ${className}`}
    />
  );
};

export default Input;
