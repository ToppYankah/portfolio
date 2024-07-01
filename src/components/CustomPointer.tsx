"use client";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { animatePointer } from "~/animations";

const CustomPointer = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [text, setText] = useState<string | null | undefined>(null);

  const setHoveredLink = (hovered: boolean, hoverText?: string | null) => {
    setHovered(() => hovered);
    setText(() => hoverText);
  };

  const handleMouseMove = ({ clientX, clientY, target }: MouseEvent) => {
    animatePointer(clientX, clientY);

    const result = target?.closest("[data-pointer-grow]");

    if (result) {
      const content = result.getAttribute("data-pointer-text");
      return setHoveredLink(true, content);
    }

    if (hovered) setHoveredLink(false);
  };

  useGSAP(
    () => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { dependencies: [hovered] },
  );

  return (
    <div
      id="custom-pointer"
      className={`${hovered ? "scale" : ""} ${text ? "with-content" : ""} z-[60] hidden items-center justify-center md:flex`}
    >
      {text ? (
        <span className="block text-center text-[80%] leading-tight text-white mix-blend-difference">
          {text}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomPointer;
