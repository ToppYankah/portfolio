"use client";
import { useLayoutEffect, useRef } from "react";
import { useCoverSheet } from "~/context/cover-sheet-context";
import { useSmoothScroll } from "~/context/smooth-scroll-context";
import SectionLayout from "~/layouts/section-layout";
import ProjectPageHeader from "./_components/Header";
import { useGSAP } from "@gsap/react";
import { ProjectInfo } from "./_components/ProjectInfo";
import { ProjectChallenge } from "./_components/ProjectChallenge";
import Footer from "~/components/Footer";

export default function Page() {
  const { show: showSheet, hide: hideSheet } = useCoverSheet();
  const { startSmoothScroll } = useSmoothScroll();
  const mainScopeRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    startSmoothScroll();

    const handleUnload = (e: BeforeUnloadEvent) => {
      showSheet();
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  useGSAP(
    () => {
      hideSheet();
    },
    { scope: mainScopeRef },
  );

  return (
    <main ref={mainScopeRef} className="min-h-screen">
      <SectionLayout id="hero" minContent>
        <ProjectPageHeader />
        <ProjectInfo />
      </SectionLayout>
      <SectionLayout id="about" minContent>
        <img
          alt="web-mockup"
          src="images/mockups/mobile2.png"
          className="z-[30] max-h-[80vh] w-full rounded-[3rem] object-cover"
        />
      </SectionLayout>
      <ProjectChallenge />
      <Footer />
    </main>
  );
}
