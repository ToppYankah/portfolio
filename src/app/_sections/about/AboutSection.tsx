"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import {
  animateBioText,
  animatePersonalInfo,
  animateProfilePhoto,
  animateRotatingStar,
  animateShortBio,
} from "./animations";
import ArrowPointerSVG from "./components/ArrowPointerSVG";

export default function AboutSection() {
  const bioText1Ref = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const rotatingStarRef = useRef<SVGSVGElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shortBioRef = useRef<HTMLDivElement | null>(null);
  const personalInfoRefs = useRef<
    (HTMLSpanElement | HTMLHeadingElement | HTMLDivElement | null)[]
  >([]);

  useGSAP(
    () => {
      animateProfilePhoto(imageContainerRef, imageRef);
      animateRotatingStar(rotatingStarRef);
      animateBioText(bioText1Ref);
      animateShortBio(shortBioRef);
      animatePersonalInfo(personalInfoRefs);
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="pt-52 max-[999px]:pt-32">
      <SectionLayout
        id="about"
        containerclassname="pb-32"
        className="relative grid grid-cols-[1fr_45%_auto] grid-rows-[auto_1fr_auto] gap-10 perspective-origin-bottom perspective-400 max-[599px]:grid-cols-[1fr_auto_1fr] max-[599px]:gap-x-0 max-[599px]:gap-y-14"
      >
        <SectionTitle
          label="About"
          className=" col-start-1 col-end-4 pb-10 max-[639px]:pt-0"
        >
          Cross-Platform\nFrontend&nbsp;Developer
        </SectionTitle>
        <div
          data-pointer-grow
          ref={imageContainerRef}
          data-pointer-text="Yep! That's Me"
          className="col-start-2 col-end-3 row-start-2 row-end-4 min-h-[clamp(300px,60vh,800px)] w-[clamp(200px,100%,600px)] overflow-hidden rounded-full bg-black max-[999px]:w-[clamp(200px,50vw,400px)] max-[599px]:w-[clamp(100px,80vw,500px)]"
        >
          <img
            ref={imageRef}
            alt="About Banner"
            src={"/images/about-banner.jpg"}
            className="h-full w-full scale-[1.3] object-cover object-center"
          />
        </div>
        <div
          ref={shortBioRef}
          className="col-start-1 col-end-2 row-start-2 row-end-3 flex w-[clamp(10px,22vw,300px)] flex-col max-[999px]:hidden"
        >
          <ArrowPointerSVG />
        </div>
        <div
          ref={shortBioRef}
          className="flex gap-10 py-10 perspective-origin-bottom perspective-400 max-[999px]:absolute max-[999px]:left-[5%] max-[999px]:top-[40%] max-[999px]:w-[40%] max-[599px]:left-[5%] max-[599px]:top-[70%] max-[599px]:w-[70%] min-[600px]:flex-col min-[1000px]:col-start-3 min-[1000px]:col-end-4 min-[1000px]:row-start-2 min-[1000px]:row-end-3"
        >
          <div
            ref={bioText1Ref}
            className="flex w-[clamp(100%,100%,100%)] items-start gap-3 max-[999px]:bg-color max-[999px]:p-2"
          >
            <svg
              width="112"
              height="116"
              viewBox="0 0 112 116"
              fill="none"
              ref={rotatingStarRef}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <path
                d="M57 0L64.5496 42.3231L102.346 21.8376L73.9637 54.1281L113.546 70.9062L70.6039 68.8487L82.1653 110.256L57 75.4L31.8347 110.256L43.3961 68.8487L0.454182 70.9062L40.0363 54.1281L11.6538 21.8376L49.4504 42.3231L57 0Z"
                fill="var(--foreground-hex)"
              />
            </svg>
            <p className="text-left text-sm">
              I'm a creative problem solver with a passion for frontend
              development. I have over 5 years of experience in crafting
              user-friendly interfaces for web and mobile. Let's create
              something amazing together.
            </p>
          </div>
        </div>
        <div
          ref={(ref) => {
            personalInfoRefs.current.push(ref);
          }}
          className="flex flex-col perspective-origin-bottom perspective-400 max-[999px]:absolute max-[999px]:left-[20%] max-[999px]:top-[75%] max-[999px]:p-10 max-[599px]:hidden min-[1000px]:col-start-3 min-[1000px]:col-end-4 min-[1000px]:row-start-3 min-[1000px]:row-end-4 min-[1000px]:pb-32"
        >
          <div
            ref={(ref) => {
              personalInfoRefs.current.push(ref);
            }}
            className="flex flex-col gap-2 max-[999px]:bg-color max-[999px]:p-5"
          >
            <h4
              className="font-serif text-xl"
              ref={(ref) => {
                personalInfoRefs.current.push(ref);
              }}
            >
              Personal Profile
            </h4>
            <p className="flex flex-col gap-1 pl-5 text-sm">
              {[
                "Kenneth Topp Yankah",
                `${new Date().getFullYear() - 2000} years old`,
                "Male (He/Him)",
                "🇬🇭 Ghanaian",
                "Frontend Developer",
              ].map((text, index) => (
                <span
                  key={index}
                  ref={(ref) => {
                    personalInfoRefs.current.push(ref);
                  }}
                  className="relative block before:absolute before:-left-5 before:top-1/2 before:aspect-square before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-inverted before:content-['']"
                >
                  {text}
                </span>
              ))}
            </p>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
