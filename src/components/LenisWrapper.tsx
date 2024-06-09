"use client";
import Lenis from "lenis";
import { useEffect } from "react";

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
    startLenis();
  }, []);

  return children;
}
