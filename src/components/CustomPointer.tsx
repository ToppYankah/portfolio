"use client";
import { useGSAP } from "@gsap/react";
import { MutableRefObject, useContext, useRef } from "react";
import { animatePointer } from "~/animations/global-animations";
import { PointerContext } from "~/context/custom-pointer-context";

const CustomPointer = () => {
  const { hoveredLink, hoverText } = useContext(PointerContext);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    animatePointer(clientX, clientY);
  };

  useGSAP(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <div
      id="custom-pointer"
      className={`${hoveredLink ? "scale" : ""} ${hoverText ? "with-content" : ""} z-[60] hidden items-center justify-center md:flex`}
    >
      {hoverText ? (
        <span className="block text-center text-sm leading-tight text-white mix-blend-difference">
          {hoverText}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomPointer;
