"use client";
import { useEffect } from "react";
import SectionLayout from "~/layouts/section-layout";
import HeroDate from "./components/HeroDate";
import HeroHeader from "./components/HeroHeader";
import HeroScrollIndicator from "./components/HeroScrollIndicator";
import HeroSocials from "./components/HeroSocials";
import HeroTitle from "./components/HeroTitle";
import { useSmoothScroll } from "~/context/smooth-scroll-context";

export default function HeroSection() {
  const { startSmoothScroll } = useSmoothScroll();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleAnimationComplete = () => {
    startSmoothScroll();
    document.body.style.overflow = "auto";
  };

  return (
    <SectionLayout
      id="hero"
      className="grid h-[90vh] max-h-screen grid-cols-[1fr_50px_50px_1fr] grid-rows-[auto_1fr_auto] gap-[20px] p-5 sm:h-screen sm:grid-cols-4 sm:px-[40px] sm:py-[20px] "
    >
      <HeroHeader />
      <HeroTitle onAnimationComplete={handleAnimationComplete} />
      <HeroDate />
      <HeroScrollIndicator />
      <HeroSocials />
    </SectionLayout>
  );
}
