"use client";
import { useGSAP } from "@gsap/react";
import {
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  createContext,
} from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "../animations";
import { projects } from "../sampleData";
import KeepScrollingIndicator from "./KeepScrollingIndicator";
import ProjectView from "./ProjectViewDesktop";
import WorkSectionConclusion from "./WorkSectionConclusion";
import WorkSectionTitle from "./WorkSectionTitle";

interface Dimensions {
  minHeight: number;
  regionWidth: number;
}

const WorkSectionDimensionsContext = createContext({
  regionWidth: 0,
  minHeight: 0,
});

export const useWorkSectionDimensions = () =>
  useContext<Dimensions>(WorkSectionDimensionsContext);

export default function WorksSectionDesktop() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    regionWidth: 0,
    minHeight: 0,
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionScopeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      const bounds = wrapperRef.current?.getBoundingClientRect();
      const regionWidth = bounds?.width || 0;
      const projectsWidth = projects.length * regionWidth * 0.65;

      setDimensions({ minHeight: projectsWidth + regionWidth, regionWidth });
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [wrapperRef.current]);

  useGSAP(
    () => {
      if (!dimensions) return;
      const tl1 = animations.animateSectionItems({
        xValue: dimensions.minHeight,
      });
      const tl2 = animations.animateProjectElementsSneak();
      const tl3 = animations.animateScrollIndicator();

      return () => {
        [tl1, tl2, tl3].map((tl) => tl.kill());
      };
    },
    { scope: sectionScopeRef, dependencies: [projects, dimensions] },
  );

  return (
    <WorkSectionDimensionsContext.Provider value={dimensions}>
      <div ref={sectionScopeRef}>
        <SectionLayout
          id="works"
          className="relative"
          includePadding={false}
          style={{
            height: dimensions.minHeight,
            minHeight: dimensions.minHeight,
          }}
          wrapperRef={wrapperRef}
        >
          <div className="sticky top-0 overflow-hidden">
            <div className="section-items-wrapper flex">
              <div className="z-10 flex min-h-screen min-w-full flex-col justify-center px-20">
                <SectionTitle label="Selected Works"> </SectionTitle>
                <WorkSectionTitle />
                <div className="scroll-indicator ml-[clamp(0px,40%,50vw)] mt-5 flex max-w-[clamp(30%,30%,60vw)] items-start gap-5 text-sm">
                  <KeepScrollingIndicator />
                  <p>
                    Keep scrolling to see some of the cool projects I had the
                    privilege to work on during my journey as a Frontend
                    Software Developer
                  </p>
                </div>
              </div>
              {projects.map((project, key) => (
                <ProjectView
                  index={key + 1}
                  project={project}
                  key={"project-showcase-" + key}
                />
              ))}
              <WorkSectionConclusion />
            </div>
          </div>
        </SectionLayout>
      </div>
    </WorkSectionDimensionsContext.Provider>
  );
}
