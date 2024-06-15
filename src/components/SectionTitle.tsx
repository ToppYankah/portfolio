import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { animateSectionTitle } from "~/animations/global-animations";

export default function SectionTitle({
  label,
  children,
  className,
  ...rest
}: {
  label?: string;
  children: string;
} & React.AllHTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textCharsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      animateSectionTitle(containerRef, textCharsRef);
    },
    { scope: containerRef },
  );

  return (
    <div {...rest} className={`flex flex-col text-center  ${className}`}>
      {label && (
        <div
          ref={containerRef}
          className="mb-2 self-start font-sans text-sm"
        >
          {label.split("").map((char, index) => (
            <span
              key={"label-char-" + index}
              ref={(ref) => {
                textCharsRef.current.push(ref);
              }}
            >
              {char}
            </span>
          ))}
        </div>
      )}
      {children.split("\\n").map((line, index) => (
        <SctionTitleLine key={"title-line-" + index} text={line} />
      ))}
    </div>
  );
}

const SctionTitleLine = ({ text }: { text: string }) => {
  const textCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const textCharsContainerRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      animateSectionTitle(textCharsContainerRef, textCharsRef);
    },
    { scope: textCharsContainerRef },
  );

  return (
    <div
      ref={(ref) => {
        textCharsContainerRef.current.push(ref);
      }}
      className="flex font-serif text-[clamp(35px,5vw,48px)] leading-[clamp(38px,5.2vw,60px)]"
    >
      {text.split("").map((char, index) => (
        <span
          key={"title-char-" + index}
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
};
