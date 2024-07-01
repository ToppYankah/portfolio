import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export const FormFieldError = ({
  error,
  useMargin = true,
}: {
  error?: any;
  useMargin?: boolean;
}) => {
  return (
    <p
      className={`${useMargin ? "mt-2" : ""} flex items-center gap-2 pl-3 text-xs text-red-700`}
    >
      <ExclamationCircleIcon width={16} /> {error?.message}
    </p>
  );
};
