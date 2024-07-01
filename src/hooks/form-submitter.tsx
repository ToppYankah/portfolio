"use client";
import { useId, useState } from "react";
import * as animations from "~/animations";

export type FormSubmitterData = {
  status: "idle" | "submitting" | "submitted" | "error";
  error?: string;
};

export default function useFormSubmitter() {
  const formId = useId().replaceAll(":", "");
  const [data, setData] = useState<FormSubmitterData>({ status: "idle" });

  const handleSubmit = async (cb: () => Promise<void>): Promise<boolean> => {
    let output = true;
    try {
      setData({ ...data, status: "submitting" });

      animations.hideFormContent(formId);

      await cb();

      setData({ status: "submitted" });
    } catch (error) {
      output = false;
      setData({ status: "error", error: error?.toString() });
    }

    setTimeout(() => {
      setData({ status: "idle" });
      animations.revealFormContent(formId);
    }, 2000);

    return output;
  };

  return { data, formId, handleSubmit };
}
