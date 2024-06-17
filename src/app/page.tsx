"use client";
import FloatingMemojiBadge from "~/components/FloatingMemojiBadge";
import AboutSection from "./_sections/about/AboutSection";
import HeroSection from "./_sections/hero/HeroSection";
import WorksSectionDesktop from "./_sections/works/WorksSectionDesktop";
import ExpertiseSection from "./_sections/expertise/ExpertiseSection";
import WorksSectionMobile from "./_sections/works/WorkSectionMobile";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <div className="max-[999px]:hidden">
        <WorksSectionDesktop />
      </div>
      <div className="min-[1000px]:hidden">
        <WorksSectionMobile />
      </div>
      <div className="h-screen"></div>
      <FloatingMemojiBadge />
    </main>
  );
}
