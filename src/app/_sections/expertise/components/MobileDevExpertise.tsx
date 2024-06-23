"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import * as animations from "../animations";


const MobileDevExpertise = ({}) => {
    const scopeRef = useRef<HTMLDivElement | null>(null);
    const mobileIconRef = useRef<SVGSVGElement | null>(null);
    const mobileIconOutline1Ref = useRef<SVGRectElement | null>(null);
    const mobileIconOutline2Ref = useRef<SVGRectElement | null>(null);
    const expertiseItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
    useGSAP(
      () => {
        animations.animateScreenOutlines(
          mobileIconRef,
          mobileIconOutline1Ref,
          mobileIconOutline2Ref,
        );
        animations.animateExpertiseItems(scopeRef, expertiseItemRefs);
      },
      { scope: scopeRef },
    );
  
    return (
      <div
        ref={scopeRef}
        className="expertise-item flex justify-end max-[999px]:justify-center"
      >
        <div className="flex w-[80%] gap-5 perspective-600 max-[499px]:w-[100%] max-[499px]:flex-col  max-[499px]:items-start max-[499px]:gap-0">
          <svg
            width="107"
            height="125"
            viewBox="0 0 107 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-[50px]"
            ref={mobileIconRef}
          >
            <line
              x1="24"
              y1="48.5"
              x2="44"
              y2="48.5"
              stroke="var(--light-hex)"
              strokeWidth="4"
            />
            <rect
              x="1.5"
              y="40.5"
              width="65"
              height="83"
              rx="20.5"
              stroke="var(--light-hex)"
              strokeWidth="4"
              className="opacity-60"
            />
            <rect
              x="1.5"
              y="40.5"
              width="65"
              height="83"
              rx="20.5"
              stroke="var(--light-hex)"
              strokeWidth="4"
              className="opacity-50"
              ref={mobileIconOutline1Ref}
            />
            <rect
              x="1.5"
              y="40.5"
              width="65"
              height="83"
              rx="20.5"
              stroke="var(--light-hex)"
              strokeWidth="4"
              className="opacity-30"
              ref={mobileIconOutline2Ref}
            />
          </svg>
          <div className="flex flex-1 flex-col gap-2 pt-12 max-[499px]:self-stretch max-[499px]:pt-0">
            <span className="flex gap-5 text-xs font-medium opacity-70">
              <b>02.</b>
              <span>Mobile Application Development</span>
            </span>
            <p className="font-serif text-xl">
              Languages, Frameworks & Platforms
            </p>
            <div className="mt-10 flex flex-col gap-6">
              {[
                { label: "Dart", level: "Intermediate" },
                { label: "Flutter", level: "Beginner" },
                { label: "React Native", level: "Beginner" },
                { label: "Swift", level: "Beginner" },
                { label: "Xamarin", level: "Beginner" },
              ].map((expertise, index) => (
                <div
                  key={expertise.label + "-key-" + index}
                  className="overflow-hidden"
                >
                  <div
                    key={"mobile-expertise-" + index}
                    className="flex items-end gap-5"
                    ref={(ref) => {
                      expertiseItemRefs.current.push(ref);
                    }}
                  >
                    <span className="text-sm font-semibold">
                      {expertise.label}
                    </span>
                    <div className="flex-1 border-b-2 border-dotted border-light opacity-50" />
                    <span className="text-sm opacity-70">{expertise.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default MobileDevExpertise;