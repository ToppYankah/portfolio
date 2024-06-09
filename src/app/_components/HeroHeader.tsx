"use client";
import SectionLayout from "~/layouts/section-layout";
import { useLayoutEffect, useRef } from "react";
import { animateLogo } from "../_animations";
import NavLink from "~/components/NavLink";

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
        Portfolio
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
    <div className="col-start-2 col-end-4 text-center">
      <a href="#" id="logo" className="font-serif text-[1.5em] font-black">
        <div className="overflow-hidden">
          {"KTY".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              ref={(ref) => {
                lettersRef.current.push(ref);
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

const HeroContact = () => {
  return (
    <div className="col-start-4 col-end-5 row-start-1 row-end-2 flex justify-end">
      <NavLink href="#" className="place-self-start self-center">
        Get in touch
      </NavLink>
    </div>
  );
};
