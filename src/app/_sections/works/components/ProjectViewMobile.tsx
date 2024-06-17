import { ForwardedRef, forwardRef } from "react";
import { Project } from "~/app/_interfaces/interfaces";

const ProjectViewMobile = forwardRef(
  ({ project }: { project: Project }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className="min-w-[300px] flex-1">
        <div className="bg-inverted-light h-[clamp(250px,60%,500px)] w-full overflow-hidden rounded-full">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="h-full w-full"
          />
        </div>
        <div className="flex justify-center pt-5">
          <h2 className="font-serif text-[clamp(25px,50vw,40px)]">
            {project.name}
          </h2>
        </div>
        {project.tags && (
          <div className="flex flex-wrap justify-center gap-x-2  py-3">
            {project.tags.map((tag, index) => (
              <span
                className="whitespace-nowrap text-sm"
                key={project.name + "-tag-" + index}
              >
                <b className="bg-accent rounded-lg p-2 py-0">#</b> {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default ProjectViewMobile;
