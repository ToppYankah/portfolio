"use client";
import { useEffect, useState } from "react";
import { FormFieldProps } from "~/types";

const CheckButton = ({
  text,
  name,
  onCheck,
  register,
  check = false,
  ...props
}: {
  text: string;
  check?: boolean;
  onCheck?: () => void;
} & FormFieldProps) => {
  useEffect(() => {
    register(name);
  }, []);

  const handleCheck = () => {
    if (onCheck) onCheck();
  };

  return (
    <button
      tabIndex={0}
      type="button"
      onClick={handleCheck}
      className={`cursor-pointer rounded-full ${check ? "bg-accent-deep" : "bg-gray-100 dark:bg-white/10"} p-0`}
    >
      <input {...props} type="checkbox" className="sr-only" />
      <p
        className={`whitespace-nowrap px-7 py-4 text-sm ${check ? "text-black" : ""}`}
      >
        {text}
      </p>
    </button>
  );
};

export default CheckButton;
