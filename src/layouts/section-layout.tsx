"use client";
import {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
} from "react";

const SectionLayout = forwardRef(
  (
    {
      id,
      darkMode,
      children,
      wrapperRef,
      minContent,
      shouldFade = true,
      includePadding = true,
      ...attr
    }: {
      id: string;
      darkMode?: boolean;
      children: ReactNode;
      shouldFade?: boolean;
      minContent?: boolean;
      includePadding?: boolean;
      containerclassname?: string;
      wrapperRef?: RefObject<HTMLDivElement>;
    } & HTMLAttributes<HTMLDivElement>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`flex justify-center ${minContent ? "min-h-min" : "min-h-screen"} ${darkMode ? "bg-dark text-inverted" : "bg-color"} ${attr.containerclassname} `}
      >
        <div
          {...attr}
          ref={wrapperRef}
          className={`z-[3] min-h-max w-screen max-w-screen-2xl ${includePadding ? "p-5 sm:px-[40px] sm:py-[20px]" : ""} ${attr.className}`}
        >
          {children}
        </div>
      </section>
    );
  },
);

export default SectionLayout;
