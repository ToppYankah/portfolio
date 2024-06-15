"use client";
import { useEffect, useLayoutEffect, useState } from "react";

export default function useThemeDetector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const mqListener = (e: MediaQueryListEvent) => setIsDarkTheme(e.matches);

  useLayoutEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme;
}
