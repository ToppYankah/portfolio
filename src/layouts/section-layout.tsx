"use client";
import { HTMLAttributes, ReactNode, useEffect } from "react";
// import { sectionHideAnimation } from "../utils/global-animations";

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
  useEffect(() => {
    let tween: any | null;
    // if (shouldFade) tween = sectionHideAnimation(id);

    return () => {
      tween?.kill();
    };
  }, []);

  return (
    <section
      id={id}
      className={`flex justify-center ${minContent ? "min-h-min" : "min-h-screen"}`}
    >
      <div
        {...attr}
        className={`min-h-max w-screen max-w-[1500px] ${attr.className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
