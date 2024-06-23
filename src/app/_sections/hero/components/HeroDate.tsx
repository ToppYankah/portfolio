"use client";

import { useRef } from "react";
import { animatePortfolioDate } from "../animations";
import { useGSAP } from "@gsap/react";

export default function HeroDate() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animatePortfolioDate();
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="col-start-1 col-end-4 row-start-3 row-end-4 font-serif sm:col-end-2"
    >
      <h2 className="whitespace-nowrap text-5xl perspective-400 max-[800px]:text-4xl max-[640px]:text-3xl">
        <p className="portfolio-text">Portfolio</p>
      </h2>
      <h2 className="whitespace-nowrap text-5xl perspective-400 max-[800px]:text-4xl max-[640px]:text-3xl">
        <p className="date-text">2024</p>
      </h2>
    </div>
  );
}
