"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateArrowLine } from "../animations";

export default function ArrowPointerSVG() {
  const svgBoxRef = useRef<SVGSVGElement | null>(null);
  const arrowHeadRef = useRef<SVGPathElement | null>(null);
  const arrowLineRef = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    animateArrowLine(svgBoxRef, arrowLineRef, arrowHeadRef);
  });

  return (
    <svg
      width="685"
      height="794"
      viewBox="0 0 685 794"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgBoxRef}
      className="aspect-square h-min w-[80%] max-[599px]:hidden self-end"
    >
      <path
        d="M6.87982 0.440186C6.87982 0.440186 -25.8523 345.724 84.2469 508.534C194.346 671.345 470.339 650.622 579.694 641.695"
        stroke="var(--foreground-hex)"
        stroke-width="6"
        ref={arrowLineRef}
      />
      <path
        d="M0.328103 0.463839L42.8489 25.0133L0.328102 49.5627L0.328103 0.463839Z"
        fill="var(--foreground-hex)"
        ref={arrowHeadRef}
      />
    </svg>
  );
}
