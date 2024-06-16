import FloatingMemojiBadge from "~/components/FloatingMemojiBadge";
import AboutSection from "./_sections/about/AboutSection";
import HeroSection from "./_sections/hero/HeroSection";
import WorksSection from "./_sections/works/WorksSection";
import ExpertiseSection from "./_sections/expertise/ExpertiseSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      {/* <WorksSection /> */}
      <FloatingMemojiBadge />
    </main>
  );
}
