import WorksSectionMobile from "./components/WorkSectionMobile";
import WorksSectionDesktop from "./components/WorksSectionDesktop";

export default function WorkSection() {
  return (
    <>
      <div className="max-[999px]:hidden">
        <WorksSectionDesktop />
      </div>
      <div className="min-[1000px]:hidden">
        <WorksSectionMobile />
      </div>
    </>
  );
}
