"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";

export default function ExpertiseSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animations.animateExpertiseItems();
    },
    { scope: scopeRef },
  );

  return (
    <SectionLayout
      id="expertise"
      ref={scopeRef}
      title="Expertise"
      className="grid grid-cols-2 grid-rows-[auto_1fr] gap-10 gap-y-32 max-[899px]:grid-cols-1 max-[899px]:grid-rows-none max-[899px]:gap-y-10"
    >
      <SectionTitle
        className="col-start-1 col-end-3 row-start-1 row-end-2 items-center pt-32 max-[899px]:col-end-2 max-[899px]:mb-10"
        labelClassName="self-center"
        label="Stack Experience"
      >
        Areas &nbsp;of &nbsp;&nbsp;Expertise
      </SectionTitle>
      <div className="min-[900px]::sticky top-10 flex max-h-[80%] justify-center max-[899px]:max-h-[350px]">
        <SideImage />
      </div>
      <div className="flex flex-col gap-10">
        <WebDevExpertise />
        <MobileDevExpertise />
      </div>
    </SectionLayout>
  );
}

const SideImage = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    animations.animateSideImage(imageContainerRef, imageRef);
  });

  return (
    <div
      ref={imageContainerRef}
      className="w-[clamp(200px,30vw,500px)] overflow-hidden rounded-full max-[899px]:w-full"
    >
      <img
        alt="Laptop"
        ref={imageRef}
        src="/images/mockups/desktop.jpeg"
        className="h-full w-full scale-[1.5] object-cover"
      />
    </div>
  );
};

const WebDevExpertise = ({}) => {
  const screenOutline1Ref = useRef<SVGRectElement | null>(null);
  const screenOutline2Ref = useRef<SVGRectElement | null>(null);

  useGSAP(() => {
    animations.animateScreenOutlines(screenOutline1Ref, screenOutline2Ref);
  });

  return (
    <div className="expertise-item flex justify-start">
      <div className="flex w-[90%] gap-5 max-[499px]:w-[100%] max-[499px]:flex-col max-[499px]:items-start max-[499px]:gap-0">
        <svg
          width="166"
          height="125"
          viewBox="0 0 166 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[70px]"
        >
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-60"
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-50"
            ref={screenOutline1Ref}
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-30"
            ref={screenOutline2Ref}
          />
          <path
            d="M39.2223 123.317L44.2321 106.625H60.1395L65.7755 123.317H39.2223Z"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            fill="var(--foreground-hex)"
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
                key={"web-expertise-" + index}
                className="flex items-end gap-5"
              >
                <span className="text-sm font-semibold">{expertise.label}</span>
                <div className="flex-1 border-b-2 border-dotted border-inverted opacity-50" />
                <span className="text-sm opacity-70">{expertise.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileDevExpertise = ({}) => {
  const screenOutline1Ref = useRef<SVGRectElement | null>(null);
  const screenOutline2Ref = useRef<SVGRectElement | null>(null);

  useGSAP(() => {
    animations.animateScreenOutlines(screenOutline1Ref, screenOutline2Ref);
  });

  return (
    <div className="expertise-item flex justify-start">
      <div className="flex w-[90%] gap-5 max-[499px]:w-[100%] max-[499px]:flex-col max-[499px]:items-start  max-[499px]:gap-0">
        <svg
          width="107"
          height="125"
          viewBox="0 0 107 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[50px]"
        >
          <line
            x1="24"
            y1="48.5"
            x2="44"
            y2="48.5"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-60"
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-50"
            ref={screenOutline1Ref}
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--foreground-hex)"
            strokeWidth="4"
            className="opacity-30"
            ref={screenOutline2Ref}
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
                key={"mobile-expertise-" + index}
                className="flex items-end gap-5"
              >
                <span className="text-sm font-semibold">{expertise.label}</span>
                <div className="flex-1 border-b-2 border-dotted border-inverted opacity-50" />
                <span className="text-sm opacity-70">{expertise.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
