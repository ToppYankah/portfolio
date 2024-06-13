"use client";
import { LegacyRef, useLayoutEffect, useRef, useState } from "react";
import Magnetic from "~/components/Magnetic";
import useThemeDetector from "~/hooks/theme-detector";
import * as animations from "../_animations";

export default ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const badgeRef: LegacyRef<HTMLDivElement> = useRef(null);
  const badgeImageRef: LegacyRef<HTMLImageElement> = useRef(null);

  const upperRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const lowerRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const middleRef: LegacyRef<HTMLHeadingElement> = useRef(null);

  // containers
  const upperRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const lowerRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const titleContainerRef: LegacyRef<HTMLDivElement> = useRef(null);

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const isDarkTheme = useThemeDetector();

  useLayoutEffect(() => {
    animations.startHeroAnimations(
      upperRef,
      middleRef,
      lowerRef,
      badgeRef,
      badgeImageRef,
      upperRefContainer,
      lowerRefContainer,
      titleContainerRef,
      () => {
        setIsAnimationComplete(true);
        onAnimationComplete();
      },
    );
  }, []);

  const handleScaleUpRotatingLetters = () => {
    animations.upscaleRotatingLetters(badgeImageRef);
  };

  const handleScaleDownRotatingLetters = () => {
    animations.downscaleRotatingLetters(badgeImageRef);
  };

  return (
    <div
      id="hero-title"
      ref={titleContainerRef}
      className="col-start-1 col-end-5 row-start-2 row-end-3 flex justify-center sm:col-start-2 sm:col-end-4"
    >
      <div className="flex max-w-[90%] sm:max-w-[100%] flex-col justify-center">
        <div className="flex items-center ">
          <div ref={upperRefContainer} className="">
            <h1 className={`relative whitespace-nowrap perspective-400`}>
              <span
                ref={upperRef}
                className="block font-serif text-[6.89vw] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11vw]"
              >
                Sculpting
              </span>
              <span
                id="short-bio"
                className="absolute left-full top-1/3 block translate-x-8 font-sans text-sm opacity-90 max-[800px]:hidden"
              >
                Kenneth Topp Yankah is a front-end software
                <br />
                engineer who is passionate about designing
                <br />
                and developing digital experiences for web
                <br />
                and mobile.
              </span>
            </h1>
          </div>
        </div>
        <div className="relative">
          <h1 className={`relative whitespace-nowrap perspective-400`}>
            <span
              ref={middleRef}
              className="block text-center font-serif text-[6.89vw] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11vw]"
            >
              Digital Dreams
            </span>
          </h1>
        </div>
        <div className="relative flex justify-end">
          <div
            ref={badgeRef}
            onMouseOver={handleScaleUpRotatingLetters}
            onMouseOut={handleScaleDownRotatingLetters}
            className="group absolute left-0 top-full z-10 w-[15%] min-w-[35%] self-center sm:relative sm:top-0 sm:min-w-[25%]"
          >
            <img
              src={`/images/${isDarkTheme ? "dark-fsd2" : "light-fsd2"}.png`}
              className="aspect-square w-full rounded-full"
              ref={badgeImageRef}
            />
            <div className="absolute left-1/2 top-1/2 flex aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-gray-600 bg-opacity-[0.2]">
              <Magnetic strength={0.2}>
                <img src="/images/memoji.png" className="w-[55%]" />
              </Magnetic>
            </div>
          </div>
          <div ref={lowerRefContainer} className="">
            <h1 className={`relative whitespace-nowrap perspective-400`}>
              <span
                ref={lowerRef}
                className="block font-serif text-[6.89vw] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11vw]"
              >
                into Reality
              </span>
              <span
                id="short-note"
                className="absolute -bottom-2 right-0 font-sans text-sm"
              >
                Driven by passion of art
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/
