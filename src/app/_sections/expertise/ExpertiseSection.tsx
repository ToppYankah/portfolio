"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Magnetic from "~/components/Magnetic";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";
import * as animations from "./animations";

export default function ExpertiseSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-32 sm:mt-52">
      <SectionLayout
        id="expertise"
        ref={scopeRef}
        darkMode={true}
        className="mt-32 grid grid-cols-2 grid-rows-[auto_auto_auto] gap-10 gap-y-32 text-light max-[899px]:grid-cols-1 max-[899px]:grid-rows-none max-[899px]:gap-y-10 sm:mt-52"
      >
        <SectionTitle
          className="col-start-1 col-end-3 row-start-1 row-end-2 items-center pt-0 max-[899px]:col-end-2 max-[899px]:mb-10 sm:pt-32"
          labelClassName="self-center"
          label="Stack Experience"
        >
          Areas &nbsp;of &nbsp;&nbsp;Expertise
        </SectionTitle>

        <AngleBracketSVG />
        <WebDevExpertise />
        <MobileDevExpertise />
        <CurlyBracketSVG />
        <div className="mb-20"></div>
      </SectionLayout>
    </div>
  );
}

const AngleBracketSVG = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateTopShape(containerRef);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center max-[999px]:hidden"
    >
      <div className="relative rotate-x-[90deg]">
        <Magnetic>
          <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Magnetic>
                <svg
                  width="666"
                  height="450"
                  viewBox="0 0 666 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="main w-[clamp(50px,40vw,250px)]"
                >
                  <path
                    d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z"
                    fill="var(--light-hex)"
                  />
                </svg>
              </Magnetic>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="666"
                height="450"
                viewBox="0 0 666 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mid w-[clamp(50px,40vw,250px)]"
              >
                <mask
                  id="path-1-outside-1_711_47"
                  maskUnits="userSpaceOnUse"
                  x="-3"
                  y="-3"
                  width="672"
                  height="456"
                  fill="var(--light-hex)"
                >
                  <rect fill="white" x="-3" y="-3" width="672" height="456" />
                  <path d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z" />
                </mask>
                <path
                  d="M172 116.5H175V111.671L170.671 113.81L172 116.5ZM172 172.5L173.276 175.215L175 174.405V172.5H172ZM56 227L54.7243 224.285L48.9451 227L54.7243 229.715L56 227ZM172 281.5H175V279.595L173.276 278.785L172 281.5ZM172 337.5L170.671 340.19L175 342.329V337.5H172ZM1.19209e-06 252.5H-3V254.364L-1.32912 255.19L1.19209e-06 252.5ZM1.19209e-06 201.5L-1.32912 198.81L-3 199.636V201.5H1.19209e-06ZM169 116.5V172.5H175V116.5H169ZM170.724 169.785L54.7243 224.285L57.2757 229.715L173.276 175.215L170.724 169.785ZM54.7243 229.715L170.724 284.215L173.276 278.785L57.2757 224.285L54.7243 229.715ZM169 281.5V337.5H175V281.5H169ZM173.329 334.81L1.32912 249.81L-1.32912 255.19L170.671 340.19L173.329 334.81ZM3 252.5V201.5H-3V252.5H3ZM1.32912 204.19L173.329 119.189L170.671 113.81L-1.32912 198.81L1.32912 204.19ZM204.434 450L201.692 448.782L199.817 453H204.434V450ZM404.434 -2.98023e-05V-3.00003H402.484L401.692 -1.21845L404.434 -2.98023e-05ZM460.934 -2.98023e-05L463.675 1.21839L465.55 -3.00003H460.934V-2.98023e-05ZM260.934 450V453H262.883L263.675 451.218L260.934 450ZM207.175 451.218L407.175 1.21839L401.692 -1.21845L201.692 448.782L207.175 451.218ZM404.434 2.99997H460.934V-3.00003H404.434V2.99997ZM458.192 -1.21845L258.192 448.782L263.675 451.218L463.675 1.21839L458.192 -1.21845ZM260.934 447H204.434V453H260.934V447ZM493.164 116.5L494.493 113.81L490.164 111.671V116.5H493.164ZM665.164 201.5H668.164V199.636L666.493 198.81L665.164 201.5ZM665.164 252.5L666.493 255.19L668.164 254.364V252.5H665.164ZM493.164 337.5H490.164V342.329L494.493 340.19L493.164 337.5ZM493.164 281.5L491.888 278.785L490.164 279.595V281.5H493.164ZM609.164 227L610.44 229.715L616.219 227L610.44 224.285L609.164 227ZM493.164 172.5H490.164V174.405L491.888 175.215L493.164 172.5ZM491.835 119.189L663.835 204.19L666.493 198.81L494.493 113.81L491.835 119.189ZM662.164 201.5V252.5H668.164V201.5H662.164ZM663.835 249.81L491.835 334.81L494.493 340.19L666.493 255.19L663.835 249.81ZM496.164 337.5V281.5H490.164V337.5H496.164ZM494.44 284.215L610.44 229.715L607.888 224.285L491.888 278.785L494.44 284.215ZM610.44 224.285L494.44 169.785L491.888 175.215L607.888 229.715L610.44 224.285ZM496.164 172.5V116.5H490.164V172.5H496.164Z"
                  fill="var(--light-hex)"
                  mask="url(#path-1-outside-1_711_47)"
                />
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="666"
                height="450"
                viewBox="0 0 666 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top w-[clamp(50px,40vw,250px)]"
              >
                <mask
                  id="path-1-outside-1_711_47"
                  maskUnits="userSpaceOnUse"
                  x="-3"
                  y="-3"
                  width="672"
                  height="456"
                  fill="var(--light-hex)"
                >
                  <rect fill="white" x="-3" y="-3" width="672" height="456" />
                  <path d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z" />
                </mask>
                <path
                  d="M172 116.5H175V111.671L170.671 113.81L172 116.5ZM172 172.5L173.276 175.215L175 174.405V172.5H172ZM56 227L54.7243 224.285L48.9451 227L54.7243 229.715L56 227ZM172 281.5H175V279.595L173.276 278.785L172 281.5ZM172 337.5L170.671 340.19L175 342.329V337.5H172ZM1.19209e-06 252.5H-3V254.364L-1.32912 255.19L1.19209e-06 252.5ZM1.19209e-06 201.5L-1.32912 198.81L-3 199.636V201.5H1.19209e-06ZM169 116.5V172.5H175V116.5H169ZM170.724 169.785L54.7243 224.285L57.2757 229.715L173.276 175.215L170.724 169.785ZM54.7243 229.715L170.724 284.215L173.276 278.785L57.2757 224.285L54.7243 229.715ZM169 281.5V337.5H175V281.5H169ZM173.329 334.81L1.32912 249.81L-1.32912 255.19L170.671 340.19L173.329 334.81ZM3 252.5V201.5H-3V252.5H3ZM1.32912 204.19L173.329 119.189L170.671 113.81L-1.32912 198.81L1.32912 204.19ZM204.434 450L201.692 448.782L199.817 453H204.434V450ZM404.434 -2.98023e-05V-3.00003H402.484L401.692 -1.21845L404.434 -2.98023e-05ZM460.934 -2.98023e-05L463.675 1.21839L465.55 -3.00003H460.934V-2.98023e-05ZM260.934 450V453H262.883L263.675 451.218L260.934 450ZM207.175 451.218L407.175 1.21839L401.692 -1.21845L201.692 448.782L207.175 451.218ZM404.434 2.99997H460.934V-3.00003H404.434V2.99997ZM458.192 -1.21845L258.192 448.782L263.675 451.218L463.675 1.21839L458.192 -1.21845ZM260.934 447H204.434V453H260.934V447ZM493.164 116.5L494.493 113.81L490.164 111.671V116.5H493.164ZM665.164 201.5H668.164V199.636L666.493 198.81L665.164 201.5ZM665.164 252.5L666.493 255.19L668.164 254.364V252.5H665.164ZM493.164 337.5H490.164V342.329L494.493 340.19L493.164 337.5ZM493.164 281.5L491.888 278.785L490.164 279.595V281.5H493.164ZM609.164 227L610.44 229.715L616.219 227L610.44 224.285L609.164 227ZM493.164 172.5H490.164V174.405L491.888 175.215L493.164 172.5ZM491.835 119.189L663.835 204.19L666.493 198.81L494.493 113.81L491.835 119.189ZM662.164 201.5V252.5H668.164V201.5H662.164ZM663.835 249.81L491.835 334.81L494.493 340.19L666.493 255.19L663.835 249.81ZM496.164 337.5V281.5H490.164V337.5H496.164ZM494.44 284.215L610.44 229.715L607.888 224.285L491.888 278.785L494.44 284.215ZM610.44 224.285L494.44 169.785L491.888 175.215L607.888 229.715L610.44 224.285ZM496.164 172.5V116.5H490.164V172.5H496.164Z"
                  fill="var(--light-hex)"
                  mask="url(#path-1-outside-1_711_47)"
                />
              </svg>
            </div>
          </>
        </Magnetic>
      </div>
    </div>
  );
};

const CurlyBracketSVG = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animations.animateBottomShape(containerRef);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center perspective-400 max-[999px]:hidden"
    >
      <div className="relative rotate-x-[90deg]">
        <Magnetic>
          <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="666"
                height="450"
                viewBox="0 0 666 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="main w-[clamp(50px,40vw,250px)]"
              >
                <path
                  d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z"
                  fill="var(--light-hex)"
                />
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="666"
                height="450"
                viewBox="0 0 666 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mid w-[clamp(50px,40vw,250px)]"
              >
                <mask
                  id="path-1-outside-1_711_47"
                  maskUnits="userSpaceOnUse"
                  x="-3"
                  y="-3"
                  width="672"
                  height="456"
                  fill="var(--light-hex)"
                >
                  <rect fill="white" x="-3" y="-3" width="672" height="456" />
                  <path d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z" />
                </mask>
                <path
                  d="M172 116.5H175V111.671L170.671 113.81L172 116.5ZM172 172.5L173.276 175.215L175 174.405V172.5H172ZM56 227L54.7243 224.285L48.9451 227L54.7243 229.715L56 227ZM172 281.5H175V279.595L173.276 278.785L172 281.5ZM172 337.5L170.671 340.19L175 342.329V337.5H172ZM1.19209e-06 252.5H-3V254.364L-1.32912 255.19L1.19209e-06 252.5ZM1.19209e-06 201.5L-1.32912 198.81L-3 199.636V201.5H1.19209e-06ZM169 116.5V172.5H175V116.5H169ZM170.724 169.785L54.7243 224.285L57.2757 229.715L173.276 175.215L170.724 169.785ZM54.7243 229.715L170.724 284.215L173.276 278.785L57.2757 224.285L54.7243 229.715ZM169 281.5V337.5H175V281.5H169ZM173.329 334.81L1.32912 249.81L-1.32912 255.19L170.671 340.19L173.329 334.81ZM3 252.5V201.5H-3V252.5H3ZM1.32912 204.19L173.329 119.189L170.671 113.81L-1.32912 198.81L1.32912 204.19ZM204.434 450L201.692 448.782L199.817 453H204.434V450ZM404.434 -2.98023e-05V-3.00003H402.484L401.692 -1.21845L404.434 -2.98023e-05ZM460.934 -2.98023e-05L463.675 1.21839L465.55 -3.00003H460.934V-2.98023e-05ZM260.934 450V453H262.883L263.675 451.218L260.934 450ZM207.175 451.218L407.175 1.21839L401.692 -1.21845L201.692 448.782L207.175 451.218ZM404.434 2.99997H460.934V-3.00003H404.434V2.99997ZM458.192 -1.21845L258.192 448.782L263.675 451.218L463.675 1.21839L458.192 -1.21845ZM260.934 447H204.434V453H260.934V447ZM493.164 116.5L494.493 113.81L490.164 111.671V116.5H493.164ZM665.164 201.5H668.164V199.636L666.493 198.81L665.164 201.5ZM665.164 252.5L666.493 255.19L668.164 254.364V252.5H665.164ZM493.164 337.5H490.164V342.329L494.493 340.19L493.164 337.5ZM493.164 281.5L491.888 278.785L490.164 279.595V281.5H493.164ZM609.164 227L610.44 229.715L616.219 227L610.44 224.285L609.164 227ZM493.164 172.5H490.164V174.405L491.888 175.215L493.164 172.5ZM491.835 119.189L663.835 204.19L666.493 198.81L494.493 113.81L491.835 119.189ZM662.164 201.5V252.5H668.164V201.5H662.164ZM663.835 249.81L491.835 334.81L494.493 340.19L666.493 255.19L663.835 249.81ZM496.164 337.5V281.5H490.164V337.5H496.164ZM494.44 284.215L610.44 229.715L607.888 224.285L491.888 278.785L494.44 284.215ZM610.44 224.285L494.44 169.785L491.888 175.215L607.888 229.715L610.44 224.285ZM496.164 172.5V116.5H490.164V172.5H496.164Z"
                  fill="var(--light-hex)"
                  mask="url(#path-1-outside-1_711_47)"
                />
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="666"
                height="450"
                viewBox="0 0 666 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top w-[clamp(50px,40vw,250px)]"
              >
                <mask
                  id="path-1-outside-1_711_47"
                  maskUnits="userSpaceOnUse"
                  x="-3"
                  y="-3"
                  width="672"
                  height="456"
                  fill="var(--light-hex)"
                >
                  <rect fill="white" x="-3" y="-3" width="672" height="456" />
                  <path d="M172 116.5V172.5L56 227L172 281.5V337.5L1.19209e-06 252.5V201.5L172 116.5ZM204.434 450L404.434 -2.98023e-05H460.934L260.934 450H204.434ZM493.164 116.5L665.164 201.5V252.5L493.164 337.5V281.5L609.164 227L493.164 172.5V116.5Z" />
                </mask>
                <path
                  d="M172 116.5H175V111.671L170.671 113.81L172 116.5ZM172 172.5L173.276 175.215L175 174.405V172.5H172ZM56 227L54.7243 224.285L48.9451 227L54.7243 229.715L56 227ZM172 281.5H175V279.595L173.276 278.785L172 281.5ZM172 337.5L170.671 340.19L175 342.329V337.5H172ZM1.19209e-06 252.5H-3V254.364L-1.32912 255.19L1.19209e-06 252.5ZM1.19209e-06 201.5L-1.32912 198.81L-3 199.636V201.5H1.19209e-06ZM169 116.5V172.5H175V116.5H169ZM170.724 169.785L54.7243 224.285L57.2757 229.715L173.276 175.215L170.724 169.785ZM54.7243 229.715L170.724 284.215L173.276 278.785L57.2757 224.285L54.7243 229.715ZM169 281.5V337.5H175V281.5H169ZM173.329 334.81L1.32912 249.81L-1.32912 255.19L170.671 340.19L173.329 334.81ZM3 252.5V201.5H-3V252.5H3ZM1.32912 204.19L173.329 119.189L170.671 113.81L-1.32912 198.81L1.32912 204.19ZM204.434 450L201.692 448.782L199.817 453H204.434V450ZM404.434 -2.98023e-05V-3.00003H402.484L401.692 -1.21845L404.434 -2.98023e-05ZM460.934 -2.98023e-05L463.675 1.21839L465.55 -3.00003H460.934V-2.98023e-05ZM260.934 450V453H262.883L263.675 451.218L260.934 450ZM207.175 451.218L407.175 1.21839L401.692 -1.21845L201.692 448.782L207.175 451.218ZM404.434 2.99997H460.934V-3.00003H404.434V2.99997ZM458.192 -1.21845L258.192 448.782L263.675 451.218L463.675 1.21839L458.192 -1.21845ZM260.934 447H204.434V453H260.934V447ZM493.164 116.5L494.493 113.81L490.164 111.671V116.5H493.164ZM665.164 201.5H668.164V199.636L666.493 198.81L665.164 201.5ZM665.164 252.5L666.493 255.19L668.164 254.364V252.5H665.164ZM493.164 337.5H490.164V342.329L494.493 340.19L493.164 337.5ZM493.164 281.5L491.888 278.785L490.164 279.595V281.5H493.164ZM609.164 227L610.44 229.715L616.219 227L610.44 224.285L609.164 227ZM493.164 172.5H490.164V174.405L491.888 175.215L493.164 172.5ZM491.835 119.189L663.835 204.19L666.493 198.81L494.493 113.81L491.835 119.189ZM662.164 201.5V252.5H668.164V201.5H662.164ZM663.835 249.81L491.835 334.81L494.493 340.19L666.493 255.19L663.835 249.81ZM496.164 337.5V281.5H490.164V337.5H496.164ZM494.44 284.215L610.44 229.715L607.888 224.285L491.888 278.785L494.44 284.215ZM610.44 224.285L494.44 169.785L491.888 175.215L607.888 229.715L610.44 224.285ZM496.164 172.5V116.5H490.164V172.5H496.164Z"
                  fill="var(--light-hex)"
                  mask="url(#path-1-outside-1_711_47)"
                />
              </svg>
            </div>
          </>
        </Magnetic>
      </div>
    </div>
  );
};

const WebDevExpertise = ({}) => {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const mainScreenRef = useRef<SVGSVGElement | null>(null);
  const screenOutline1Ref = useRef<SVGRectElement | null>(null);
  const screenOutline2Ref = useRef<SVGRectElement | null>(null);
  const expertiseItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      animations.animateScreenOutlines(
        mainScreenRef,
        screenOutline1Ref,
        screenOutline2Ref,
      );
      animations.animateExpertiseItems(scopeRef, expertiseItemRefs);
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="expertise-item flex justify-start max-[999px]:justify-center"
    >
      <div className="flex w-[80%] gap-5 perspective-600 max-[499px]:w-[100%] max-[499px]:flex-col max-[499px]:items-start max-[499px]:gap-0">
        <svg
          width="166"
          height="125"
          viewBox="0 0 166 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[70px]"
          ref={mainScreenRef}
        >
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-60"
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-50"
            ref={screenOutline1Ref}
          />
          <rect
            x="1.72034"
            y="40.022"
            width="101.631"
            height="65.0133"
            rx="25"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-30"
            ref={screenOutline2Ref}
          />
          <path
            d="M39.2223 123.317L44.2321 106.625H60.1395L65.7755 123.317H39.2223Z"
            stroke="var(--light-hex)"
            strokeWidth="4"
            fill="var(--light-hex)"
          />
        </svg>
        <div className="flex flex-1 flex-col gap-2 pt-12 max-[499px]:self-stretch max-[499px]:pt-0">
          <span className="flex gap-5 text-xs font-medium opacity-70">
            <span>01.</span>
            <span>Web Application Development</span>
          </span>
          <p className="font-serif text-xl">Languages & Frameworks</p>
          <div className="mt-10 flex flex-col gap-6">
            {[
              { label: "HTML5", level: "Professional" },
              { label: "CSS3", level: "Professional" },
              { label: "JavaScript", level: "Professional" },
              { label: "TypeScript", level: "Professional" },
              { label: "React", level: "Professional" },
              { label: "Tailwind CSS", level: "Professional" },
              { label: "Next.js", level: "Professional" },
            ].map((expertise, index) => (
              <div className="overflow-hidden">
                <div
                  key={"web-expertise-" + index}
                  className="flex items-end gap-5"
                  ref={(ref) => {
                    expertiseItemRefs.current.push(ref);
                  }}
                >
                  <span className="text-sm font-semibold">
                    {expertise.label}
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-light opacity-50" />
                  <span className="text-sm opacity-70">{expertise.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileDevExpertise = ({}) => {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const mainScreenRef = useRef<SVGSVGElement | null>(null);
  const screenOutline1Ref = useRef<SVGRectElement | null>(null);
  const screenOutline2Ref = useRef<SVGRectElement | null>(null);
  const expertiseItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      animations.animateScreenOutlines(
        mainScreenRef,
        screenOutline1Ref,
        screenOutline2Ref,
      );
      animations.animateExpertiseItems(scopeRef, expertiseItemRefs);
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="expertise-item flex justify-end max-[999px]:justify-center"
    >
      <div className="flex w-[80%] gap-5 perspective-600 max-[499px]:w-[100%] max-[499px]:flex-col  max-[499px]:items-start max-[499px]:gap-0">
        <svg
          width="107"
          height="125"
          viewBox="0 0 107 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[50px]"
          ref={mainScreenRef}
        >
          <line
            x1="24"
            y1="48.5"
            x2="44"
            y2="48.5"
            stroke="var(--light-hex)"
            strokeWidth="4"
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-60"
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-50"
            ref={screenOutline1Ref}
          />
          <rect
            x="1.5"
            y="40.5"
            width="65"
            height="83"
            rx="20.5"
            stroke="var(--light-hex)"
            strokeWidth="4"
            className="opacity-30"
            ref={screenOutline2Ref}
          />
        </svg>
        <div className="flex flex-1 flex-col gap-2 pt-12 max-[499px]:self-stretch max-[499px]:pt-0">
          <span className="flex gap-5 text-xs font-medium opacity-70">
            <b>02.</b>
            <span>Mobile Application Development</span>
          </span>
          <p className="font-serif text-xl">
            Languages, Frameworks & Platforms
          </p>
          <div className="mt-10 flex flex-col gap-6">
            {[
              { label: "Dart", level: "Intermediate" },
              { label: "Flutter", level: "Beginner" },
              { label: "React Native", level: "Beginner" },
              { label: "Swift", level: "Beginner" },
              { label: "Xamarin", level: "Beginner" },
            ].map((expertise, index) => (
              <div className="overflow-hidden">
                <div
                  key={"mobile-expertise-" + index}
                  className="flex items-end gap-5"
                  ref={(ref) => {
                    expertiseItemRefs.current.push(ref);
                  }}
                >
                  <span className="text-sm font-semibold">
                    {expertise.label}
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-light opacity-50" />
                  <span className="text-sm opacity-70">{expertise.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
