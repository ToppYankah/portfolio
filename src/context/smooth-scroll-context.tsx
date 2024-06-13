"use client";
import Lenis from "lenis";
import { createContext, useContext } from "react";


export const SmoothScrollContext = createContext<any>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const startSmoothScroll = () => {
    const lenis = new Lenis({ lerp: 0.05 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };

  return (
    <SmoothScrollContext.Provider value={{ startSmoothScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
