"use client";
import { useLayoutEffect } from "react";
import SectionLayout from "~/layouts/section-layout";
import HeroDate from "./HeroDate";
import HeroHeader from "./HeroHeader";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroSocials from "./HeroSocials";
import HeroTitle from "./HeroTitle";

export default function HeroSection() {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <SectionLayout
      id="hero"
      className="grid-cols-[1fr_50px_50px_1fr] sm:grid-cols-4 grid max-h-[95vh] h-screen grid-rows-[auto_1fr_auto] gap-[20px] p-5 sm:px-[40px] sm:py-[20px] "
    >
      <HeroHeader />
      <HeroTitle onAnimationComplete={() => console.log("done")} />
      <HeroDate />
      <HeroScrollIndicator />
      <HeroSocials />
    </SectionLayout>
  );
}
