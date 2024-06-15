"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import {
  animateBioText,
  animateImageBanner,
  animatePersonalInfo,
  animateRotatingStar,
  animateShortBio,
} from "./animations";
import ArrowPointerSVG from "./components/ArrowPointerSVG";

export default function AboutSection() {
  const bioText1Ref = useRef<HTMLParagraphElement | null>(null);
  const bioText2Ref = useRef<HTMLParagraphElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const rotatingStarRef = useRef<HTMLSpanElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shortBioRef = useRef<HTMLDivElement | null>(null);
  const personalInfoRefs = useRef<
    (HTMLSpanElement | HTMLHeadingElement | HTMLDivElement | null)[]
  >([]);

  useGSAP(
    () => {
      animateImageBanner(imageContainerRef, imageRef);
      animateRotatingStar(rotatingStarRef);
      animateBioText(bioText1Ref);
      animateBioText(bioText2Ref);
      animateShortBio(shortBioRef);
      animatePersonalInfo(personalInfoRefs);
    },
    { scope: sectionRef },
  );

  return (
    <SectionLayout
      ref={sectionRef}
      id="about-section"
      className="relative grid grid-cols-[1fr_auto_auto] grid-rows-[auto_1fr_auto] gap-10 perspective-origin-bottom perspective-400"
    >
      <SectionTitle className="justify-end pb-10 pt-52 max-[999px]:pt-10 max-[999px]:col-start-2 max-[999px]:col-end-4 min-[1000px]:col-start-3 min-[1000px]:col-end-4">
        Biography
      </SectionTitle>
      <div
        ref={imageContainerRef}
        className="col-start-2 col-end-3 row-start-2 row-end-4 min-h-[clamp(300px,60vh,1000px)] min-[1000px]:w-[clamp(400px,40vw,800px)] max-[999px]:w-[clamp(300px,60vw,600px)] overflow-hidden"
      >
        <img
          ref={imageRef}
          alt="About Banner"
          src={"/images/about-banner.jpg"}
          className="h-full w-full scale-[1.2] object-cover object-center"
        />
      </div>
      <div
        ref={shortBioRef}
        className="flex min-[600px]:flex-col gap-10 py-10 perspective-origin-bottom perspective-400 max-[999px]:absolute max-[999px]:left-[5%] max-[999px]:top-[20%] max-[999px]:w-[30%] max-[599px]:left-[5%] max-[599px]:top-[70%] max-[599px]:w-[60%] min-[1000px]:col-start-1 min-[1000px]:col-end-2 min-[1000px]:row-start-2 min-[1000px]:row-end-3"
      >
        <div className="flex items-start gap-5 max-[999px]:bg-color max-[999px]:p-2">
          <span ref={rotatingStarRef} className="text-2xl leading-[20px]">
            ✴
          </span>
          <p
            ref={bioText1Ref}
            className="w-[clamp(300px,70%,650px)] text-left text-sm"
          >
            I'm a creative problem solver with a passion for frontend
            development. I have over 5 years of experience in crafting
            user-friendly interfaces for web and mobile. Let's create something
            amazing together.
          </p>
        </div>
        <ArrowPointerSVG />
      </div>
      <div
        ref={(ref) => {
          personalInfoRefs.current.push(ref);
        }}
        className="flex flex-col perspective-origin-bottom perspective-400 max-[999px]:absolute max-[999px]:right-[5%] max-[999px]:top-[90%] max-[999px]:p-10 min-[1000px]:col-start-3 min-[1000px]:col-end-4 min-[1000px]:row-start-3 min-[1000px]:row-end-4 min-[1000px]:pb-32 max-[599px]:hidden"
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
          <p className="flex flex-col pl-5 text-sm">
            {["Kenneth Topp Yankah", "24 years old", "Male", "Ghanaian 🇬🇭"].map(
              (text, index) => (
                <span
                  key={index}
                  ref={(ref) => {
                    personalInfoRefs.current.push(ref);
                  }}
                  className="relative block before:absolute before:-left-5 before:top-1/2 before:aspect-square before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-inverted before:content-['']"
                >
                  {text}
                </span>
              ),
            )}
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
