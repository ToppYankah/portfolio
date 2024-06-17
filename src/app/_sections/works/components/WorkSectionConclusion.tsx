"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Magnetic from "~/components/Magnetic";
import NavLink from "~/components/NavLink";
import * as animations from "../animations";

export default function WorkSectionConclusion() {
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(() => {
    animations.animateConclusionHeading(titleRefs);
  });

  return (
    <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center">
      <h1
        ref={(ref) => {
          titleRefs.current.push(ref);
        }}
        className="font-serif text-[clamp(25px,9vw,100px)] leading-[1.2em]"
      >
        Did You
      </h1>
      <div
        ref={(ref) => {
          titleRefs.current.push(ref);
        }}
        className="flex items-center gap-8"
      >
        <h1 className="font-serif text-[clamp(25px,9vw,100px)] leading-[1.2em] ">
          Like
        </h1>
        <div className="rounded-full bg-accent px-12 py-2 text-[clamp(20px,5vw,100px)] leading-tight">
          <Magnetic>
            <span className="block">😍</span>
          </Magnetic>
        </div>
        <h1 className="font-serif text-[clamp(25px,9vw,100px)] leading-[1.2em] ">
          What
        </h1>
      </div>
      <h1
        ref={(ref) => {
          titleRefs.current.push(ref);
        }}
        className="font-serif text-[clamp(25px,9vw,100px)] leading-[1.2em]"
      >
        You Saw?
      </h1>
      <div className="mt-10 flex justify-center">
        <NavLink href="#" className="text-sm">
          More Projects &rarr;
        </NavLink>
      </div>
      <FinalScrollIndicator />
    </div>
  );
}

const FinalScrollIndicator = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const rectRef = useRef<SVGRectElement | null>(null);
  const ellipseRef = useRef<SVGEllipseElement | null>(null);

  useGSAP(() => {
    animations.animateFinalScrollIndicator(pathRef, rectRef, ellipseRef);
  });

  return (
    <svg
      width="55"
      height="150"
      viewBox="0 0 55 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
    >
      <path
        d="M29 94L29 327"
        stroke="var(--foreground-hex)"
        strokeWidth="5"
        strokeLinecap="round"
        ref={pathRef}
      />
      <rect
        x="2.5"
        y="3.44727"
        width="50"
        height="90.5263"
        rx="25"
        stroke="var(--foreground-hex)"
        strokeWidth="5"
        fill="var(--background-hex)"
        ref={rectRef}
      />
      <ellipse
        cx="27.5"
        cy="69"
        rx="16.5"
        ry="17"
        fill="var(--foreground-hex)"
        ref={ellipseRef}
      />
    </svg>
  );
};
