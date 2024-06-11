"use client";
import classNames from "classnames";
import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { animatePointer } from "~/animations/global-animations";
import { PointerContext } from "~/context/custom-pointer-context";

const CustomPointer = () => {
  const { hoveredLink, hoverText } = useContext(PointerContext);
  const pointerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (pointerRef.current == null) return;
    animatePointer(
      pointerRef as MutableRefObject<HTMLDivElement>,
      clientX,
      clientY,
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={pointerRef}
      id="custom-pointer"
      className={`${hoveredLink ? "scale" : ""} ${hoverText ? "with-content" : ""} hidden sm:flex`}
    >
      {hoverText ? (
        <p
          className="block text-black mix-blend-difference"
          style={{ margin: 10 }}
        >
          {hoverText}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomPointer;
