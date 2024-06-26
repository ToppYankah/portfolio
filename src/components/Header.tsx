import SectionLayout from "~/layouts/section-layout";
import Magnetic from "./Magnetic";
import Link from "next/link";
import NavLink from "./NavLink";
import { ReactNode } from "react";

export default function Header({ children }: { children?: ReactNode[] }) {
  return (
    <SectionLayout id="header" minContent>
      <div className="grid grid-cols-3">
        <div className="grid place-items-start content-center">
          <div className="flex gap-[clamp(20px,5vw,30px)]">
            <NavLink href="/#works">Works</NavLink>
            <NavLink href="/#about">About</NavLink>
          </div>
        </div>
        <div className="grid place-content-center">
          <Magnetic>
            <Link href="/" className="font-serif text-xl font-bold">
              Kenny
            </Link>
          </Magnetic>
        </div>
        <div className="grid place-items-end content-center">
          <div className="flex gap-[clamp(20px,5vw,30px)]">
            {children !== (undefined || null) ? (
              children?.map((link) => link)
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
