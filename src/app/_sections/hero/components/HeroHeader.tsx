"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import NavLink from "~/components/NavLink";
import { useModal } from "~/context/modal-context";
import { animateLinks, animateLogo } from "../animations";
import { useSmoothScroll } from "~/context/smooth-scroll-context";

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
  const navScopeRef = useRef<HTMLDivElement | null>(null);
  const { lenis } = useSmoothScroll();

  useGSAP(
    () => {
      animateLinks();
    },
    { scope: navScopeRef },
  );

  return (
    <nav
      ref={navScopeRef}
      className="relative col-start-1 col-end-2 row-start-1 row-end-2 flex gap-5 sm:gap-8"
    >
      <div className="link-item flex">
        <NavLink
          className="self-center"
          href="#about"
          onClick={() => lenis?.scrollTo("#about")}
        >
          Bio
        </NavLink>
      </div>
      <div className="link-item flex">
        <NavLink
          className="self-center"
          href="#works"
          onClick={() => lenis?.scrollTo("#works")}
        >
          Works
        </NavLink>
      </div>
    </nav>
  );
};

const HeroLogo = () => {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animateLogo();
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="col-start-2 col-end-4 flex justify-center">
      <a data-pointer-grow href="#" id="logo" className="flex font-serif text-xl font-black">
        {"Kenny".split("").map((char, index) => {
          return (
            <p className="logo-char" key={char + index}>
              {char}
            </p>
          );
        })}
      </a>
    </div>
  );
};

const HeroContact = () => {
  const navScopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animateLinks();
    },
    { scope: navScopeRef },
  );

  return (
    <nav
      ref={navScopeRef}
      className="col-start-4 col-end-5 row-start-1 row-end-2 flex justify-end gap-5 sm:gap-8"
    >
      <div className="link-item flex">
        <NavLink
          href="/#review"
          className="place-self-start self-center whitespace-nowrap"
        >
          Reviews
        </NavLink>
      </div>
      <div className="link-item flex">
        <NavLink
          href="/contact"
          className="place-self-start self-center whitespace-nowrap"
        >
          Let's talk
        </NavLink>
      </div>
    </nav>
  );
};
