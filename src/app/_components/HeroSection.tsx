"use client";
import SectionLayout from "~/layouts/section-layout";
import HeroHeader from "./HeroHeader";

export default function HeroSection() {
  return (
    <SectionLayout
      id="hero"
      className="grid-cols-[auto 1fr 1fr auto] grid max-h-screen min-h-screen grid-rows-[auto_1fr_auto] gap-[20px] px-[40px] py-[20px]"
    >
      <HeroHeader />
    </SectionLayout>
  );
}
