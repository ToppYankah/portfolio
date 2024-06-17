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
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center">
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
    </div>
  );
}
