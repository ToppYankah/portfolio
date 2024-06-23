import { HTMLAttributes } from "react";

const TextArea = ({
  placeholder,
  ...props
}: { placeholder: string } & HTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      className="block max-h-[350px] min-h-[250px] w-full overflow-hidden rounded-2xl border-2 border-transparent bg-gray-100 dark:border-white/5 p-3 text-sm focus:border-inverted focus:outline-none dark:bg-white dark:bg-opacity-[0.07]"
      aria-multiline
    />
  );
};

export default TextArea;
