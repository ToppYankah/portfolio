"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { CoverSheetState } from "~/context/cover-sheet-context";

export default function CoverSheet({ state }: { state: CoverSheetState }) {
  const coverSheetScope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    },
    { scope: coverSheetScope },
  );

  return (
    <div
      id="cover-sheet"
      ref={coverSheetScope}
      className={`fixed inset-0 z-[20] ${state} bg-accent-deep`}
    >
      <div className="cover-sheet-wrapper relative flex h-full w-full items-center justify-center bg-color" />
    </div>
  );
}
