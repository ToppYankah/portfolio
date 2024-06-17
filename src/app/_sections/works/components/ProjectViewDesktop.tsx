"use client";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { PointerContext } from "~/context/custom-pointer-context";
import * as animations from "../animations";
import { Project } from "~/app/_interfaces/interfaces";
import Magnetic from "~/components/Magnetic";

const ProjectView = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { setHoveredLink } = useContext(PointerContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nameCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const coverImageRef = useRef<HTMLImageElement | null>(null);
  const tagLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(() => {
    animations.animateProjectCoverImageParallax(coverImageRef, index);
  });

  useGSAP(
    () => {
      let animationComplete = false;

      const scrollHandler = () => {
        const props = containerRef.current?.getBoundingClientRect();
        const inView = (props?.right || 0) <= window.innerWidth + 100;

        if (inView && !animationComplete) {
          animationComplete = true;
          animations.animateProjectNameReveal(nameCharsRef);
          animations.animateProjectTagReveal(tagLinesRef);
        }
      };

      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    },
    { dependencies: [containerRef.current] },
  );

  const handleMouseOver = (text: string | null) => {
    setHoveredLink(true, text);
  };

  const handleMouseOut = () => {
    setHoveredLink(false, null);
  };

  return (
    <div
      ref={containerRef}
      className="work-item flex min-h-screen min-w-[65vw] items-center gap-10 px-20"
    >
      <div
        onMouseOut={handleMouseOut}
        onMouseOver={() => handleMouseOver("See\nProject")}
        className="cover-image h-[clamp(500px,80vh,1000px)] w-[clamp(300px,50%,450px)] min-w-[clamp(300px,60%,450px)] overflow-hidden rounded-full bg-black hover:cursor-pointer"
      >
        <img
          ref={coverImageRef}
          title={project.name}
          src={project.imageUrl}
          alt={`${project.name} - Cover Image`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-2 text-sm">
          {!project.tags ? (
            <p
              ref={(ref) => {
                tagLinesRef.current.push(ref);
              }}
              className="translate-y-[150%] opacity-0 blur-[12px] -rotate-y-45"
            >
              <b className="rounded-lg bg-accent p-2 py-0">#</b> No Tags
            </p>
          ) : (
            project.tags?.map((tag, index) => (
              <p
                ref={(ref) => {
                  tagLinesRef.current.push(ref);
                }}
                key={project.name + "-tag-" + index}
                className="translate-y-[150%] opacity-0 blur-[12px] -rotate-y-45"
              >
                <b className="rounded-lg bg-accent p-2 py-0">#</b> {tag}
              </p>
            ))
          )}
        </div>
        <div
          className="mt-52 perspective-400 hover:cursor-pointer"
          onMouseOver={() => handleMouseOver(null)}
          onMouseOut={handleMouseOut}
        >
          {project.name.split("\n").map((line, index) => (
            <h2
              key={project.name + "-line-" + index}
              className="work-name-line flex font-serif text-[clamp(20px,50vw,4rem)] leading-[1em]"
            >
              {line.split("").map((char, index) =>
                char ? (
                  <span
                    ref={(ref) => {
                      nameCharsRef.current.push(ref);
                    }}
                    key={project.name + "-line-char-" + index}
                    className="work-name-line-char translate-y-[150%] opacity-0 blur-[12px] -rotate-y-45"
                  >
                    {char}
                  </span>
                ) : (
                  <span
                    className="translate-y-[150%] opacity-0 blur-[12px] -rotate-y-45"
                    ref={(ref) => {
                      nameCharsRef.current.push(ref);
                    }}
                  >
                    &nbsp;
                  </span>
                ),
              )}
            </h2>
          ))}
          {project.label && (
            <p className="text-xs uppercase">{project.label}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;