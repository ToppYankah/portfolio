"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import * as animations from "../animations";

export default function () {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateHeroScrollIndicator();
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="col-start-2 col-end-4 row-start-3 row-end-4 hidden items-end justify-center sm:flex"
    >
      <div className="overflow-hidden">
        <div className="indicator-wrapper flex items-center gap-2">
          <p className="text-sm">Scroll</p>
          <AnimatedArrow />
          <p className="text-sm">Down</p>
        </div>
      </div>
    </div>
  );
}

const AnimatedArrow = () => {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateHeroScrollIndicatorArrows();
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="pointer-events-none flex max-h-[18px] items-end overflow-hidden"
    >
      <div className="flex flex-col">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <span
              key={`arrow-${i}`}
              className="scroll-down-arrow block h-3 w-3 rotate-45 border-b-2 border-r-2 border-inverted"
            ></span>
          ))}
      </div>
    </div>
  );
};
