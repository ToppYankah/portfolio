import React, { useEffect, useRef } from "react";
import { animateSectionTitle } from "~/animations/global-animations";

export default function SectionTitle({
  children,
  className,
  ...rest
}: { children: string } & React.AllHTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textCharsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    animateSectionTitle(containerRef, textCharsRef);
  }, []);

  return (
    <div
      {...rest}
      ref={containerRef}
      className={`flex text-center font-serif text-[clamp(35px,5vw,48px)] font-bold ${className}`}
    >
      {children.split("").map((char, index) => (
        <span
          key={index}
          className="block"
          ref={(ref) => {
            textCharsRef.current.push(ref);
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
