import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateSectionTitle } from "~/animations/global-animations";

export default function SectionTitle({
  label,
  children,
  className,
  labelClassName,
  ...rest
}: {
  label?: string;
  children: string;
  labelClassName?: string;
} & React.AllHTMLAttributes<HTMLDivElement>) {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animateSectionTitle();
    },
    { scope: scopeRef },
  );

  const renderTitleLine = (text: string, index: number) => {
    return (
      <div
        key={"title-line-" + index}
        className="flex font-serif text-[clamp(35px,5vw,48px)] leading-[clamp(38px,5.2vw,60px)]"
      >
        {text.split("").map((char, index) => (
          <span key={"title-char-" + index} className="text-char block">
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      {...rest}
      ref={scopeRef}
      className={`flex flex-col text-center ${className}`}
    >
      {label && (
        <div
          className={`mb-2 self-start font-sans text-xs uppercase ${labelClassName}`}
        >
          {label.split("").map((char, index) => (
            <span key={"label-char-" + index} className="text-char">
              {char}
            </span>
          ))}
        </div>
      )}
      <div className="title-container">
        {children
          .split("\\n")
          .map((line, index) => renderTitleLine(line, index))}
      </div>
    </div>
  );
}
