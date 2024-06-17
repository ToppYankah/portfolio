"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Magnetic from "~/components/Magnetic";
import * as animations from "../animations";

const WorkSectionTitle = () => {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateSectionTitle();
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef}>
      <div className="title-scope flex flex-col font-serif text-[clamp(50px,7vw,120px)] leading-[clamp(50px,9vw,135px)]">
        <h1 className="upper">The Moment</h1>
        <div className="middle flex items-center gap-[clamp(20px,4vw,40px)]">
          <div className="bg-accent rounded-full px-14 pb-1 pt-4">
            <h1 className="flex text-[clamp(20px,5.5vw,150px)] leading-[clamp(20px,7vw,150px)]">
              <Magnetic>
                <span className="glass block">🔥</span>
              </Magnetic>
            </h1>
          </div>
          <h1>You've Been</h1>
        </div>
        <h1 className="lower">Waiting For...</h1>
      </div>
    </div>
  );
};

export default WorkSectionTitle;
