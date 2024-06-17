"use client";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { PointerContext } from "~/context/custom-pointer-context";
import * as animations from "../animations";
import { Project } from "~/app/_interfaces/interfaces";

const ProjectView = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { setHoveredLink } = useContext(PointerContext);
  const nameCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const tagLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(() => {
    animations.animateProjectNameReveal(nameCharsRef, index);
    animations.animateProjectTagReveal(tagLinesRef, index);
  });

  const handleMouseOver = (text: string | null) => {
    setHoveredLink(true, text);
  };

  const handleMouseOut = () => {
    setHoveredLink(false, null);
  };

  return (
    <div className="work-item flex min-h-screen min-w-[65vw] items-center gap-10 px-20">
      <div
        onMouseOut={handleMouseOut}
        onMouseOver={() => handleMouseOver("See\nProject")}
        className="cover-image h-[clamp(500px,80vh,1000px)] w-[clamp(300px,50%,450px)] min-w-[clamp(300px,60%,450px)] overflow-hidden rounded-full bg-black hover:cursor-pointer"
      >
        <img
          title={project.name}
          src={project.imageUrl}
          alt={`${project.name} - Cover Image`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="text-sm flex flex-col gap-2">
          {!project.tags ? (
            <p
              ref={(ref) => {
                tagLinesRef.current.push(ref);
              }}
            >
              <b className="bg-accent rounded-lg p-2 py-0">#</b> No Tags
            </p>
          ) : (
            project.tags?.map((tag, index) => (
              <p
                ref={(ref) => {
                  tagLinesRef.current.push(ref);
                }}
                key={project.name + "-tag-" + index}
              >
                <b className="bg-accent rounded-lg p-2 py-0">#</b> {tag}
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
              className="work-name-line flex font-serif text-[clamp(20px,50vw,4rem)] leading-[clamp(20px,50vw,4rem)]"
            >
              {line.split("").map((char, index) =>
                char ? (
                  <span
                    ref={(ref) => {
                      nameCharsRef.current.push(ref);
                    }}
                    key={project.name + "-line-char-" + index}
                    className="work-name-line-char"
                  >
                    {char}
                  </span>
                ) : (
                  <span
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
