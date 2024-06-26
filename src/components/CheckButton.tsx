"use client";
import { useEffect, useState } from "react";

const CheckButton = ({
  text,
  check,
  onCheck,
}: {
  text: string;
  check?: boolean;
  onCheck?: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (check !== undefined) setIsChecked(check);
  }, [check]);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (onCheck) onCheck();
  };

  return (
    <button
      tabIndex={0}
      onClick={handleCheck}
      className={`cursor-pointer rounded-full ${isChecked ? "bg-accent-deep" : "bg-gray-100 dark:bg-white/10"} p-0`}
    >
      <input type="checkbox" className="hidden" />
      <p
        className={`whitespace-nowrap px-7 py-4 text-sm ${isChecked ? "text-black" : ""}`}
      >
        {text}
      </p>
    </button>
  );
};

export default CheckButton;
