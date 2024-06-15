import dynamic from "next/dynamic";

const DynamicHeroSection = dynamic(
  () => import("./_sections/hero/HeroSection"),
  {
    ssr: false,
  },
);

const DynamicAboutSection = dynamic(
  () => import("./_sections/about/AboutSection"),
  {
    ssr: false,
  },
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DynamicHeroSection />
      <DynamicAboutSection />
      <div className="min-h-[100vh]">
      </div>
    </main>
  );
}
