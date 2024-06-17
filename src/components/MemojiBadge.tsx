"use client";
import { useGSAP } from "@gsap/react";
import {
  ForwardedRef,
  HTMLAttributes,
  HTMLProps,
  MutableRefObject,
  forwardRef,
  useRef,
} from "react";
import {
  animateRotatingBadge,
  downscaleRotatingLetters,
  upscaleRotatingLetters,
} from "~/animations/global-animations";
import Magnetic from "~/components/Magnetic";
import useThemeDetector from "~/hooks/theme-detector";

const MemojiBadge = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const isDarkTheme = useThemeDetector();
    const badgeImageRef: MutableRefObject<HTMLImageElement | null> =
      useRef(null);

    useGSAP(() => {
      const tl = animateRotatingBadge(badgeImageRef);

      return () => {
        tl.kill();
      };
    }, []);

    const handleScaleUpRotatingLetters = () => {
      upscaleRotatingLetters(badgeImageRef);
    };

    const handleScaleDownRotatingLetters = () => {
      downscaleRotatingLetters(badgeImageRef);
    };

    return (
      <div
        ref={ref}
        onMouseOver={handleScaleUpRotatingLetters}
        onMouseOut={handleScaleDownRotatingLetters}
        {...props}
      >
        <img
          src={`/images/${isDarkTheme ? "dark-fsd3" : "light-fsd3"}.png`}
          className="aspect-square w-full rounded-full"
          ref={badgeImageRef}
        />
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-accent bg-opacity-[0.2]">
          <Magnetic strength={0.2}>
            <img src="/images/memoji.png" className="w-[55%]" />
          </Magnetic>
        </div>
      </div>
    );
  },
);

export default MemojiBadge;
