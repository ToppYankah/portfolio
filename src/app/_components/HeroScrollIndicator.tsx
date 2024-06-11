"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { animateHeroScrollIndicator } from "../_animations";

export default function () {
  return (
    <div className="col-start-2 col-end-4 row-start-3 row-end-4 items-end justify-center hidden sm:flex">
      <div id="scroll-indicator" className="overflow-hidden">
        <div className="wrapper flex items-center gap-2">
          <p className="text-sm">Scroll</p>
          <AnimatedArrow />
          <p className="text-sm">Down</p>
        </div>
      </div>
    </div>
  );
}

const AnimatedArrow = () => {
  const arrowsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tween = animateHeroScrollIndicator(arrowsRef);

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="flex max-h-[18px] items-end overflow-hidden pointer-events-none">
      <div className="flex flex-col">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <span
              key={`arrow-${i}`}
              ref={(ref) => {
                arrowsRef.current.push(ref);
              }}
              className="border-inverted block h-3 w-3 rotate-45 border-b-2 border-r-2"
            ></span>
          ))}
      </div>
    </div>
  );
};
