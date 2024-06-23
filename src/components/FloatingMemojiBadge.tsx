"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { toggleFloatingMemojiAnimation } from "~/animations/global-animations";
import MemojiBadge from "~/components/MemojiBadge";

const FloatingMemojiBadge = () => {
  const floatingBadgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    toggleFloatingMemojiAnimation(floatingBadgeRef);
  });

  return (
    <MemojiBadge
      ref={floatingBadgeRef}
      className="fixed bottom-10 left-10 z-[10000] hidden aspect-square w-32 md:block"
    />
  );
};

export default FloatingMemojiBadge;
