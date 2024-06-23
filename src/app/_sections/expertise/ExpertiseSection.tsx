"use client";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import AngleBracketSVG from "./components/AngleBracketSVG";
import CurlyBracketSVG from "./components/CurlyBracketSVG";
import WebDevExpertise from "./components/WebDevExpertise";
import MobileDevExpertise from "./components/MobileDevExpertise";

export default function ExpertiseSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  return (
    <SectionLayout
      id="expertise"
      ref={scopeRef}
      darkMode={true}
      containerclassname="pb-52"
      className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-10 gap-y-32 text-light max-[899px]:grid-cols-1 max-[899px]:grid-rows-none max-[899px]:gap-y-10"
    >
      <SectionTitle
        className="col-start-1 col-end-3 row-start-1 row-end-2 items-center pt-0 max-[899px]:col-end-2 max-[899px]:mb-10 sm:pt-32"
        labelClassName="self-center"
        label="Stack Experience"
      >
        Areas &nbsp;of &nbsp;&nbsp;Expertise
      </SectionTitle>
      <AngleBracketSVG />
      <WebDevExpertise />
      <MobileDevExpertise />
      <CurlyBracketSVG />
      {/* <div className="mb-20"></div> */}
    </SectionLayout>
  );
}
