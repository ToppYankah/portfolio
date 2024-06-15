import FloatingMemojiBadge from "~/components/FloatingMemojiBadge";
import AboutSection from "./_sections/about/AboutSection";
import HeroSection from "./_sections/hero/HeroSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <div className="min-h-[100vh]"></div>
      <FloatingMemojiBadge />
    </main>
  );
}