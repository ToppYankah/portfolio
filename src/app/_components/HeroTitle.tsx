"use client";
import {
  LegacyRef,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import Magnetic from "~/components/Magnetic";
import useThemeDetector from "~/hooks/theme-detector";
import { startHeroAnimations } from "../_animations";

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
    startHeroAnimations(
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

  return (
    <div
      id="hero-title"
      ref={titleContainerRef}
      className="col-start-1 col-end-5 sm:col-start-2 sm:col-end-4 row-start-2 row-end-3 flex justify-center"
    >
      <div className="max-w-[60%] sm:max-w-full flex flex-col justify-center">
        <div className="flex items-center ">
          <div ref={upperRefContainer} className="">
            <h1
              className={`after:bg-color relative translate-x-0 whitespace-nowrap after:absolute after:inset-0 after:translate-y-full after:scale-x-[1.5] after:content-['_'] ${isAnimationComplete ? "after:bg-transparent" : ""} perspective-400`}
            >
              <span ref={upperRef} className="block font-serif text-[6.2rem] max-[950px]:text-[5rem] max-[800px]:text-[4rem] text-center sm:text-left">
                Sculpting
              </span>
              <span id="short-bio" className="block absolute text-sm font-sans top-1/3 left-full translate-x-8 opacity-90 max-[800px]:hidden">
                Kenneth Topp Yankah is a front-end software<br />engineer who is passionate about designing<br />and developing digital experiences for web<br />and mobile.
              </span>
            </h1>
          </div>
        </div>
        <div className="relative">
          <h1
            className={`after:bg-color whitespace-nowrap font-serif text-[6.2rem] max-[950px]:text-[5rem] max-[800px]:text-[4rem] after:absolute after:inset-0 after:translate-y-full after:scale-x-[1.5] after:content-['_'] ${isAnimationComplete ? "after:bg-transparent" : ""} perspective-400 relative min-h-[6rem] `}
          >
            <span ref={middleRef} className="block sm:relative absolute left-1/2 -translate-x-1/2">
              Digital Dreams
            </span>
          </h1>
        </div>
        <div className="relative flex justify-end">
          <div ref={badgeRef} className="self-center z-10 w-[15%] sm:w-[25%] min-w-[100px] absolute top-full left-0 sm:relative sm:top-0">
            <img src={`/images/${isDarkTheme ? "dark-fsd" : "light-fsd"}.png`} className="rounded-full w-full aspect-square" ref={badgeImageRef} />
            <div className="rounded-full w-[75%] aspect-square bg-gray-600 bg-opacity-[0.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
              <Magnetic strength={0.2}>
                <img src="/images/memoji.png" className="w-[55%]"/>
              </Magnetic>
            </div>
          </div>
          <div ref={lowerRefContainer} className="">
            <h1
              className={`after:bg-color relative translate-x-0 whitespace-nowrap text-[6.2rem] max-[950px]:text-[5rem] max-[800px]:text-[4rem] after:absolute after:inset-0 after:translate-y-full after:scale-x-[1.5] after:content-['_'] ${isAnimationComplete ? "after:bg-transparent" : ""} perspective-400`}
            >
              <span ref={lowerRef} className="block font-serif text-center sm:text-left">
                into Reality
              </span>
              <span id="short-note" className="absolute text-sm font-sans -bottom-2 right-0">Driven by passion of art</span>
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