"use client";
import { useEffect, useRef } from "react";
import { toggleFloatingMemojiAnimation } from "~/animations/global-animations";
import MemojiBadge from "~/components/MemojiBadge";

const FloatingMemojiBadge = () => {
  const floatingBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = toggleFloatingMemojiAnimation(floatingBadgeRef);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <MemojiBadge
      ref={floatingBadgeRef}
      className="fixed bottom-10 left-10 hidden aspect-square w-32 md:block"
    />
  );
};

export default FloatingMemojiBadge;
