"use client";
import { LegacyRef, useLayoutEffect, useRef } from "react";
import MemojiBadge from "~/components/MemojiBadge";
import useMediaQuery from "~/hooks/meda-query";
import * as animations from "../animations";

export default ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const badgeRef: LegacyRef<HTMLDivElement> = useRef(null);

  const upperRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const lowerRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const middleRef: LegacyRef<HTMLHeadingElement> = useRef(null);

  // containers
  const upperRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const lowerRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const titleContainerRef: LegacyRef<HTMLDivElement> = useRef(null);

  const { isMobile } = useMediaQuery();

  useLayoutEffect(() => {
    const tl = animations.startHeroAnimations(
      upperRef,
      middleRef,
      lowerRef,
      badgeRef,
      upperRefContainer,
      lowerRefContainer,
      titleContainerRef,
      {
        isMobile,
        onComplete: onAnimationComplete,
      },
    );

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      id="hero-title"
      ref={titleContainerRef}
      className="col-start-1 col-end-5 row-start-2 row-end-3 flex justify-center lg:col-start-2 lg:col-end-4"
    >
      <div className="flex max-w-[100%] flex-col justify-center sm:max-w-[70%] lg:max-w-[100%]">
        <div className="flex items-center">
          <div ref={upperRefContainer} className="">
            <h1 className="relative whitespace-nowrap perspective-400">
              <span
                ref={upperRef}
                className="block font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]"
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
          <h1 className="relative whitespace-nowrap perspective-400">
            <span
              ref={middleRef}
              className="block text-center font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]"
            >
              Digital Dreams
            </span>
          </h1>
        </div>
        <div className="relative flex justify-end">
          <MemojiBadge ref={badgeRef} />
          <div ref={lowerRefContainer} className="">
            <h1 className="relative whitespace-nowrap perspective-400">
              <span
                ref={lowerRef}
                className="block font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]"
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
