"use client";
import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from "react";

const SectionLayout = forwardRef(
  (
    {
      id,
      children,
      minContent,
      shouldFade = true,
      includePadding = true,
      darkMode,
      ...attr
    }: {
      id: string;
      darkMode?: boolean;
      shouldFade?: boolean;
      minContent?: boolean;
      includePadding?: boolean;
      children: ReactNode;
    } & HTMLAttributes<HTMLDivElement>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`flex justify-center ${minContent ? "min-h-min" : "min-h-screen"} ${darkMode ? "bg-dark" : ""}`}
      >
        <div
          {...attr}
          className={`min-h-max w-screen max-w-screen-2xl ${includePadding ? "p-5 sm:px-[40px] sm:py-[20px]" : ""} ${attr.className}`}
        >
          {children}
        </div>
      </section>
    );
  },
);

export default SectionLayout;
