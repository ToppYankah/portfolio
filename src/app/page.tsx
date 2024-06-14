import dynamic from "next/dynamic";

const DynamicHeroSection = dynamic(
  () => import("./_sections/hero/HeroSection"),
  {
    ssr: false,
  },
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DynamicHeroSection />
      <div className="h-screen"></div>
    </main>
  );
}
