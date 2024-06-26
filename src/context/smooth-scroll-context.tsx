"use client";
import Lenis from "lenis";
import { createContext, useContext, useLayoutEffect, useState } from "react";

export const SmoothScrollContext = createContext<{
  lenis: Lenis | null;
  startSmoothScroll: () => void;
}>({ lenis: null, startSmoothScroll: () => {} });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

const isBrowser = typeof window !== "undefined";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = isBrowser ? new Lenis({ lerp: 0.05 }) : null;

  const startSmoothScroll = () => {
    if (isBrowser) {
      function raf(time: any) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis, startSmoothScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
