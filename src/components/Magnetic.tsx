"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, {
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  useRef,
} from "react";

const Magnetic = ({
  message,
  children,
  strength = 0.5,
  ...rest
}: {
  children: ReactElement;
  message?: string | null;
  strength?: number;
} & HTMLAttributes<HTMLDivElement>) => {
  const ref: MutableRefObject<HTMLElement | null> = useRef(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current == null) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const xAddition = width / 2;
    const yAddition = height / 2;
    const y = clientY - (top + yAddition);
    const x = clientX - (left + xAddition);

    gsap.to(ref.current, { x: x * strength, y: y * strength });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    gsap.to(ref.current, { x: 0, y: 0 });
  };

  useGSAP(() => {
    ref.current?.addEventListener("mousemove", handleMouseMove);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return React.cloneElement(children, {
    ref,
    ...rest,
    ["data-pointer-grow"]: true,
  });
};

export default Magnetic;
