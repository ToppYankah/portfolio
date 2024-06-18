"use client";
import FloatingMemojiBadge from "~/components/FloatingMemojiBadge";
import AboutSection from "./_sections/about/AboutSection";
import ExpertiseSection from "./_sections/expertise/ExpertiseSection";
import HeroSection from "./_sections/hero/HeroSection";
import WorkSection from "./_sections/works/WorkSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
      <div className="h-screen"></div>
      <FloatingMemojiBadge />
    </div>
  );
}
