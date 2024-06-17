"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import * as animations from "../animations";

const KeepScrollingIndicator = () => {
  const svgScopeRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      animations.animateScrollBall();
    },
    { scope: svgScopeRef },
  );

  return (
    <svg
      width="49"
      height="50"
      viewBox="0 0 49 97"
      fill="none"
      ref={svgScopeRef}
      xmlns="http://www.w3.org/2000/svg"
      className="svgScope self-start"
    >
      <rect
        x="2.5"
        y="2.5"
        width="44"
        height="70"
        rx="22"
        stroke="var(--foreground-hex)"
        strokeWidth="5"
      />
      <circle
        cx="24.3333"
        cy="55.3333"
        r="12.3333"
        fill="var(--foreground-hex)"
        className="scroll-ball"
      />
    </svg>
  );
};

export default KeepScrollingIndicator;
