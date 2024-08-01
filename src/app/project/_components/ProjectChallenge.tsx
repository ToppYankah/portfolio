"use client";
import SectionLayout from "~/layouts/section-layout";
import NavLink from "~/components/NavLink";

export const ProjectChallenge = () => {
  return (
    <SectionLayout id="challenge" minContent>
      <div className="flex flex-wrap gap-5 px-5 py-16 sm:gap-10 sm:px-10 sm:py-52 sm:pr-32">
        <div className="flex flex-1 sm:justify-end">
          <div className="">
            <p className="text-xs uppercase">Problem Statment</p>
            <h1 className="min-w-[300px]  whitespace-nowrap font-serif text-[clamp(30px,5vw,35px)] leading-tight">
              The Challenge
            </h1>
          </div>
        </div>
        <div className="flex min-w-[300px] max-w-[600px] flex-[2] flex-col gap-5 pt-[1em] sm:gap-10">
          <p>
            This is one of the most complex websites we have ever built. The
            difficulty was not only in the fact that it should have become an
            award winning website, but also in the fact that the field of
            activity is very specific and difficult to present. <br />
            <br /> The client came to us with a fairly clear vision and detailed
            description. The problem was visualizing the idea. We had to
            completely rebrand the company and reach a wide audience with the
            new website.
          </p>
          <NavLink active href="" className="text-lg">
            Launch Project
          </NavLink>
        </div>
      </div>
    </SectionLayout>
  );
};
