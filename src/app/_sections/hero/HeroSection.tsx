"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useSmoothScroll } from "~/context/smooth-scroll-context";
import useMediaQuery from "~/hooks/meda-query";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";
import HeroDate from "./components/HeroDate";
import HeroHeader from "./components/HeroHeader";
import HeroScrollIndicator from "./components/HeroScrollIndicator";
import HeroSocials from "./components/HeroSocials";
import HeroTitle from "./components/HeroTitle";

export default function HeroSection() {
  const { isMobile } = useMediaQuery();
  const { startSmoothScroll } = useSmoothScroll();
  const scopeRef = useRef<HTMLDivElement | null>(null);

  const handleAnimationComplete = () => {
    startSmoothScroll();
    document.body.style.overflow = "auto";
  };

  if (typeof window !== "undefined") {
    // Instantly hide the body overflow
    document.body.style.overflow = "hidden";
  }

  useGSAP(
    () => {
      animations.startHeroAnimations({
        isMobile,
        onComplete: handleAnimationComplete,
      });
    },
    { scope: scopeRef, dependencies: [isMobile], revertOnUpdate: true },
  );

  return (
    <div ref={scopeRef}>
      <SectionLayout
        id="hero"
        containerclassname="invisible"
        className="grid h-[90vh] max-h-screen grid-cols-[1fr_50px_50px_1fr] grid-rows-[auto_1fr_auto] gap-[20px]  sm:h-screen sm:grid-cols-4"
      >
        <HeroHeader />
        <HeroTitle />
        <HeroDate />
        <HeroScrollIndicator />
        <HeroSocials />
      </SectionLayout>
    </div>
  );
}
