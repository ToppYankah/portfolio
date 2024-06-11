"use client";
import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1280px)");
    const tabletMedia = window.matchMedia(
      "(min-width: 768px) and (max-width: 1279px)",
    );
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    const handleResize = () => {
      setIsDesktop(desktopMedia.matches);
      setIsTablet(tabletMedia.matches);
      setIsMobile(mobileMedia.matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop, isTablet, isMobile };
};

export default useMediaQuery;
