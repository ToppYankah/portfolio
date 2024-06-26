import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import { projects } from "../sampleData";
import ProjectViewMobile from "./ProjectViewMobile";

export default function WorksSectionMobile() {
  return (
    <SectionLayout id="works" className="relative">
      <SectionTitle label="Selected Works" className="mt-32">
        The&nbsp;Moment\nYou&nbsp;have&nbsp;Been\nWaiting&nbsp;For
      </SectionTitle>
      <div className="mt-20 flex flex-wrap gap-10 max-[720px]:gap-5">
        {projects.map((project) => (
          <ProjectViewMobile key={project.name} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
}
