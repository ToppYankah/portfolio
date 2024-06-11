import dynamic from "next/dynamic";
import HeroSection from "./_components/HeroSection";

const DynamicHeroSection = dynamic(() => import("./_components/HeroSection"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DynamicHeroSection />
      <div className="h-screen"></div>
    </main>
  );
}
