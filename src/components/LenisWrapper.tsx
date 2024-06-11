"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const startLenis = () => {
    const lenis = new Lenis({ lerp: 0.05 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };

  useEffect(() => {
    if(!ScrollTrigger.isTouch) startLenis();
  }, []);

  return children;
}
