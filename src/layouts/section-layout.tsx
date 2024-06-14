"use client";
import { HTMLAttributes, ReactNode } from "react";

const SectionLayout = ({
  id,
  children,
  minContent,
  shouldFade = true,
  ...attr
}: {
  id: string;
  shouldFade?: boolean;
  minContent?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      id={id}
      className={`flex justify-center ${minContent ? "min-h-min" : "min-h-screen"}`}
    >
      <div
        {...attr}
        className={`min-h-max w-screen max-w-[1500px] p-5 sm:px-[40px] sm:py-[20px] ${attr.className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
