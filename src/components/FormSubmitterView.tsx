"use client";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { ForwardedRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import { FormSubmitterData } from "~/hooks/form-submitter";
import { RadialLoader } from "./RadialLoader";

const FormSubmitterView = forwardRef(
  (
    {
      data,
      formId,
      message = "Submitting...",
    }: {
      formId: string;
      message?: string;
      data: FormSubmitterData;
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (data.status === "idle") return null;

    const renderContent = () => {
      switch (data.status) {
        case "submitted":
          return (
            <>
              <CheckCircleIcon width={50} color="green" />
              <p className="text-sm">Submitted Successfully</p>
            </>
          );

        case "error":
          return (
            <>
              <XCircleIcon width={50} color="red" />
              <p className="text-sm">Failed to Submit</p>
            </>
          );

        default:
          return (
            <>
              <RadialLoader />
              <p className="text-sm">{message}</p>
            </>
          );
      }
    };

    if (!document) return null;

    return createPortal(
      <div
        ref={ref}
        className="absolute inset-0 flex max-h-[500px] flex-col items-center justify-center gap-5 rounded-2xl bg-black/5 dark:bg-white/5"
      >
        {renderContent()}
      </div>,
      document.getElementById(formId)!,
    );
  },
);

export default FormSubmitterView;
