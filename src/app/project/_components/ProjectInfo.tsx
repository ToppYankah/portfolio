import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export const ProjectInfo = () => {
  return (
    <div className="px-5 py-16 pb-10 sm:px-10 sm:py-20">
      <p className="text-xs uppercase">Awtsyde</p>
      <h1 className="mb-10 mt-1 font-serif text-[clamp(30px,5vw,80px)] capitalize leading-[1.1em]">
        A platform that <br /> connects tennis players
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 sm:gap-5">
          {["Website Development", "React.js", "Redux", "Animations"].map(
            (tag, index) => (
              <p key={index} className="text-sm capitalize dark:text-white/70">
                <span className="mr-2 rounded-md bg-accent-deep px-2 text-xs text-black">
                  #
                </span>
                {tag}
              </p>
            ),
          )}
        </div>
        <div className="flex gap-8">
          <Link
            href="https://github.com/ToppYankah"
            className="flex items-center text-sm"
            target="_blank"
            data-pointer-grow
          >
            <SocialIcon
              url="https://github.com/ToppYankah"
              fgColor="var(--foreground-hex)"
              bgColor="#0000"
              network="github"
              target="_blank"
              style={{ width: 35 }}
            />
            View Github
          </Link>
          <Link
            href="https://github.com/ToppYankah"
            className="flex items-center gap-2 text-sm"
            target="_blank"
            data-pointer-grow
          >
            <ArrowUpRightIcon width={18} />
            Launch Project
          </Link>
        </div>
      </div>
    </div>
  );
};
