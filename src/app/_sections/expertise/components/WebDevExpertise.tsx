"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import * as animations from "../animations";

const WebDevExpertise = ({}) => {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const monitorIconRef = useRef<SVGSVGElement | null>(null);
  const monitorIconOutline1Ref = useRef<SVGRectElement | null>(null);
  const monitorIconOutline2Ref = useRef<SVGRectElement | null>(null);
  const expertiseItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      animations.animateScreenOutlines(
        monitorIconRef,
        monitorIconOutline1Ref,
        monitorIconOutline2Ref,
      );
      animations.animateExpertiseItems(scopeRef, expertiseItemRefs);
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="expertise-item flex justify-start max-[999px]:justify-center"
    >
      <div className="flex w-[80%] gap-5 perspective-600 max-[499px]:w-[100%] max-[499px]:flex-col max-[499px]:items-start max-[499px]:gap-0">
        <svg
          width="166"
          height="125"
          viewBox="0 0 166 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[70px]"
          ref={monitorIconRef}
        >
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-60"
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-50"
            ref={monitorIconOutline1Ref}
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-30"
            ref={monitorIconOutline2Ref}
          />
          <path
            d="M39.2223 123.317L44.2321 106.625H60.1395L65.7755 123.317H39.2223Z"
            stroke="var(--light-hex)"
            strokeWidth="4"
            fill="var(--light-hex)"
          />
        </svg>
        <div className="flex flex-1 flex-col gap-2 pt-12 max-[499px]:self-stretch max-[499px]:pt-0">
          <span className="flex gap-5 text-xs font-medium opacity-70">
            <span>01.</span>
            <span>Web Application Development</span>
          </span>
          <p className="font-serif text-xl">Languages & Frameworks</p>
          <div className="mt-10 flex flex-col gap-6">
            {[
              { label: "HTML5", level: "Professional" },
              { label: "CSS3", level: "Professional" },
              { label: "JavaScript", level: "Professional" },
              { label: "TypeScript", level: "Professional" },
              { label: "React", level: "Professional" },
              { label: "Tailwind CSS", level: "Professional" },
              { label: "Next.js", level: "Professional" },
            ].map((expertise, index) => (
              <div
                key={expertise.label + "-key-" + index}
                className="overflow-hidden"
              >
                <div
                  key={"web-expertise-" + index}
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

export default WebDevExpertise;
