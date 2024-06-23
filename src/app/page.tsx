"use client";
import FloatingMemojiBadge from "~/components/FloatingMemojiBadge";
import AboutSection from "./_sections/about/AboutSection";
import ExpertiseSection from "./_sections/expertise/ExpertiseSection";
import HeroSection from "./_sections/hero/HeroSection";
import WorkSection from "./_sections/works/WorkSection";
import ReviewSection from "./_sections/review/ReviewSection";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
      <ReviewSection />
      <Footer />
      <FloatingMemojiBadge />
    </div>
  );
}
