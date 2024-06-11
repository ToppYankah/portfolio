"use client";

import { useEffect, useRef } from "react";
import { animatePortfolioDate } from "../_animations";

export default function HeroDate() {
    const portfolioRef = useRef<HTMLParagraphElement>(null);
    const dateRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        animatePortfolioDate(dateRef, portfolioRef);
    }, []);

    return (
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 font-serif">
            <h2 className="whitespace-nowrap text-5xl max-[800px]:text-4xl max-[640px]:text-3xl perspective-400">
                <p ref={portfolioRef}>Portfolio</p>
            </h2>
            <h2 className="whitespace-nowrap text-5xl max-[800px]:text-4xl max-[640px]:text-3xl perspective-400">
                <p ref={dateRef}>2024</p>
            </h2>
      </div>
    );
  }
  