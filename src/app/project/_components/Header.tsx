import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Magnetic from "~/components/Magnetic";
import { useCoverSheet } from "~/context/cover-sheet-context";

export default function ProjectPageHeader() {
  const router = useRouter();
  const { show: showSheet } = useCoverSheet();

  const handleBack = () => showSheet(router.back);

  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center gap-5">
        <Magnetic>
          <button
            onClick={handleBack}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm dark:bg-white/10"
          >
            <ChevronLeftIcon width={18} />
            <span>Back</span>
          </button>
        </Magnetic>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/">
          <p className="font-serif text-lg font-bold">Kenny</p>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-5">
        <Magnetic>
          <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm dark:bg-white/10">
            <span>Next</span>
            <ChevronRightIcon width={18} />
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
