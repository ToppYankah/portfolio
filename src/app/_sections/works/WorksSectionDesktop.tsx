"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";
import KeepScrollingIndicator from "./components/KeepScrollingIndicator";
import ProjectView from "./components/ProjectViewDesktop";
import WorkSectionConclusion from "./components/WorkSectionConclusion";
import WorkSectionTitle from "./components/WorkSectionTitle";
import { projects } from "./sampleData";

export default function WorksSectionDesktop() {
  const sectionScopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateSectionItems({ total: projects.length });
      animations.animateProjectElementsSneak();
      animations.animateScrollIndicator();
    },
    { scope: sectionScopeRef, dependencies: [projects] },
  );

  return (
    <div ref={sectionScopeRef}>
      <SectionLayout
        id="works"
        className="relative"
        includePadding={false}
        style={{ minHeight: `${projects.length * 65 + 100}vw` }}
      >
        <div className="sticky left-0 top-0">
          <div className="section-items-wrapper flex">
            <div className="z-10 flex min-h-screen min-w-full flex-col justify-center px-20">
              <SectionTitle label="Selected Works"> </SectionTitle>
              <WorkSectionTitle />
              <div className="scroll-indicator ml-[clamp(0px,40%,50vw)] mt-5 flex max-w-[clamp(30%,30%,60vw)] items-start gap-5 text-sm">
                <KeepScrollingIndicator />
                <p>
                  Keep scrolling to see some of the cool projects I had the
                  privilege to work on during my journey as a Frontend Software
                  Developer
                </p>
              </div>
            </div>
            {projects.map((project, key) => (
              <ProjectView
                project={project}
                key={"project-showcase-" + key}
                index={key + 1}
              />
            ))}
            <WorkSectionConclusion />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
