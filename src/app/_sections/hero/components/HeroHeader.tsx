"use client";
import { LegacyRef, MutableRefObject, useLayoutEffect, useRef } from "react";
import NavLink from "~/components/NavLink";
import { animateLinks, animateLogo } from "../../../_animations";

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
  const navRefs: MutableRefObject<(HTMLDivElement | null)[]> = useRef([]);

  useLayoutEffect(() => {
    animateLinks(navRefs);
  }, []);

  return (
    <nav className="relative col-start-1 col-end-2 row-start-1 row-end-2 flex gap-5 sm:gap-8">
      <div
        ref={(ref) => {
          navRefs.current?.push(ref);
        }}
        className="flex"
      >
        <NavLink className="self-center" href="#">
          Bio
        </NavLink>
      </div>
      <div
        ref={(ref) => {
          navRefs.current?.push(ref);
        }}
        className="flex"
      >
        <NavLink className="self-center" href="#">
          Works
        </NavLink>
      </div>
    </nav>
  );
};

const HeroLogo = () => {
  const lettersRef: MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);

  useLayoutEffect(() => {
    animateLogo(lettersRef);
  }, []);

  return (
    <div className="col-start-2 col-end-4 flex justify-center">
      <a
        href="#"
        id="logo"
        className="text-inverted text-md flex font-sans font-black"
      >
        {"KENNY.".split("").map((char, iindex) => {
          return (
            <p
              ref={(ref) => {
                if (ref) lettersRef.current?.push(ref);
              }}
              key={iindex}
            >
              {char}
            </p>
          );
        })}
      </a>
    </div>
  );
};

const HeroContact = () => {
  return (
    <div className="col-start-4 col-end-5 row-start-1 row-end-2 flex justify-end">
      <NavLink
        href="#"
        className="place-self-start self-center whitespace-nowrap"
      >
        Let's talk
      </NavLink>
    </div>
  );
};
