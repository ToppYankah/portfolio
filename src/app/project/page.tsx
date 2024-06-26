"use client";
import { useLayoutEffect, useRef } from "react";
import { useCoverSheet } from "~/context/cover-sheet-context";
import { useSmoothScroll } from "~/context/smooth-scroll-context";
import SectionLayout from "~/layouts/section-layout";
import ProjectPageHeader from "./_components/Header";
import NavLink from "~/components/NavLink";
import { animateAllElements } from "./animations";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const { show: showSheet, hide: hideSheet } = useCoverSheet();
  const { startSmoothScroll } = useSmoothScroll();
  const mainScopeRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    startSmoothScroll();

    const handleUnload = (e: BeforeUnloadEvent) => {
      showSheet();
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  useGSAP(
    () => {
      hideSheet();
      //   animateAllElements
    },
    { scope: mainScopeRef },
  );

  return (
    <main ref={mainScopeRef} className="min-h-screen">
      <SectionLayout id="hero" minContent>
        <ProjectPageHeader />
        <ProjectInfo />
      </SectionLayout>
      <img
        alt="web-mockup"
        src="images/mockups/mobile2.png"
        className="z-[30] max-h-[80vh] w-full object-cover"
      />
      <ProjectChallenge />
      <SectionLayout id="about" minContent>
        <img
          alt="web-mockup"
          src="images/mockups/web1.png"
          className="z-[30] max-h-[80vh] w-full rounded-[3rem] object-cover"
        />
      </SectionLayout>
      <ProjectDetail />
    </main>
  );
}

const ProjectInfo = () => {
  return (
    <div className="px-5 py-16 pb-10 sm:px-10 sm:py-28">
      <p className="text-xs uppercase">Awtsyde</p>
      <h1 className="mb-10 mt-1 font-serif text-[clamp(30px,5vw,80px)] capitalize leading-[1.1em]">
        A platform that <br /> connects tennis players
      </h1>
      <div className="flex flex-wrap gap-3 sm:gap-5">
        {["Website Development", "React.js", "Redux", "Animations"].map(
          (tag, index) => (
            <p key={index} className="text-sm capitalize dark:text-white/70">
              <span className="bg-accent-deep mr-2 rounded-md px-2 text-xs text-black">
                #
              </span>
              {tag}
            </p>
          ),
        )}
      </div>
    </div>
  );
};

const ProjectChallenge = () => {
  return (
    <SectionLayout id="challenge" minContent>
      <div className="flex flex-wrap gap-5 px-5 py-16 sm:gap-10 sm:px-10 sm:py-52 sm:pr-32">
        <div className="flex flex-1 sm:justify-end">
          <div className="">
            <p className="text-xs uppercase">Problem Statment</p>
            <h1 className="min-w-[300px]  whitespace-nowrap font-serif text-[clamp(30px,5vw,35px)] leading-tight">
              The Challenge
            </h1>
          </div>
        </div>
        <div className="flex min-w-[300px] max-w-[600px] flex-[2] flex-col gap-5 pt-[1em] sm:gap-10">
          <p>
            This is one of the most complex websites we have ever built. The
            difficulty was not only in the fact that it should have become an
            award winning website, but also in the fact that the field of
            activity is very specific and difficult to present. <br />
            <br /> The client came to us with a fairly clear vision and detailed
            description. The problem was visualizing the idea. We had to
            completely rebrand the company and reach a wide audience with the
            new website.
          </p>
          <NavLink active href="" className="text-lg">
            Launch Project
          </NavLink>
        </div>
      </div>
    </SectionLayout>
  );
};

const ProjectDetail = () => {
  return (
    <SectionLayout id={"section-detail"}>
      <div className="flex flex-wrap gap-5 md:py-52 py-32 sm:gap-10 px:10 sm:px-12 ">
        <div className="flex max-w-[500px] flex-col">
          <span className="text-xs uppercase">Detail Label</span>
          <h1 className="font-serif text-[clamp(30px,5vw,40px)] leading-tight">
            Detail Title Comes Here
          </h1>
          <p className="mt-5 sm:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            aspernatur voluptas omnis. Saepe minus odio animi nam deleniti
            pariatur cupiditate eum cumque veritatis earum perferendis.
          </p>
        </div>
        <div className="grid gap-14 sm:gap-20 md:grid-cols-2 lg:max-w-[75%]">
          {[
            "/images/mockups/mobile1.png",
            "/images/mockups/mobile2.png",
            "/images/mockups/web2.png",
            "/images/mockups/web1.png",
          ].map((src, i) => (
            <div
              key={"img-" + i}
              className={`flex w-full flex-1 flex-col ${(i + 1) % 2 !== 0 ? "md:translate-y-20" : "md:-translate-y-20"}`}
            >
              <img
                src={src}
                alt=""
                className="w-full rounded-[2.5rem] object-cover aspect-[1/1.3]"
              />
              <p className="mt-5 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                tempore, iste alias consectetur fugit nesciunt.
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
