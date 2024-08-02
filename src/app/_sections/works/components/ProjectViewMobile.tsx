import { useRouter } from "next/navigation";
import { ForwardedRef, forwardRef } from "react";
import { useCoverSheet } from "~/context/cover-sheet-context";
import { Project } from "~/interfaces/interfaces";

const ProjectViewMobile = forwardRef(
  ({ project }: { project: Project }, ref: ForwardedRef<HTMLDivElement>) => {
    const router = useRouter();
    const { show: showSheet } = useCoverSheet();

    const handleClick = () => showSheet(() => router.push("/project"));

    return (
      <div
        onClick={handleClick}
        className="min-w-[300px] flex-1 cursor-pointer min-[700px]:max-w-[50%]"
      >
        <div className="h-[clamp(250px,60%,500px)] w-full overflow-hidden rounded-[2rem] bg-inverted-light">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center pt-5">
          <h2 className="font-serif text-[clamp(25px,9vw,30px)]">
            {project.name}
          </h2>
        </div>
        {project.tags && (
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-3">
            {project.tags.map((tag, index) => (
              <span
                className="whitespace-nowrap text-xs"
                key={project.name + "-tag-" + index}
              >
                <b className="rounded-lg bg-accent-deep p-2 py-0 text-black">
                  #
                </b>{" "}
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default ProjectViewMobile;
