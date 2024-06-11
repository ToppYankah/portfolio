"use client";
import { useLayoutEffect, useRef } from "react";
import NavLink from "~/components/NavLink";
import { animateLogo } from "../_animations";

export default function HeroHeader() {
  return (
    <>
      <HeroNav />
      <HeroLogo />
      <HeroContact />
    </>
  );
}

const HeroNav = () => {
  return (
    <nav className="relative col-start-1 col-end-2 row-start-1 row-end-2 flex gap-5 sm:gap-10">
      <NavLink className="self-center" href="#">
        Bio
      </NavLink>
      <NavLink className="self-center" href="#">
        Projects
      </NavLink>
    </nav>
  );
};

const HeroLogo = () => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    animateLogo(lettersRef);
  }, []);

  return (
    <div className="col-start-2 col-end-4 flex justify-center">
      <a href="#" id="logo" className="font-serif text-[1.5em] font-black ">
        <object data="/icons/logo.svg" className="text-inverted" width={50} type="image/svg+xml" />
      </a>
    </div>
  );
};

const HeroContact = () => {
  return (
    <div className="col-start-4 col-end-5 row-start-1 row-end-2 flex justify-end">
      <NavLink href="#" className="place-self-start self-center whitespace-nowrap">
        Download Resumé
      </NavLink>
    </div>
  );
};
