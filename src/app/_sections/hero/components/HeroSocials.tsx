"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { animateSocials } from "../animations";

export default function HeroSocials() {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animateSocials();
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="col-start-1 col-end-5 row-start-3 row-end-4 flex items-end justify-end sm:col-start-4"
    >
      <div className="social-item">
        <SocialIcon
          data-pointer-grow
          url="https://github.com/ToppYankah"
          fgColor="var(--foreground-hex)"
          bgColor="#0000"
          network="github"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          data-pointer-grow
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--foreground-hex)"
          bgColor="#0000"
          network="linkedin"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          data-pointer-grow
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--foreground-hex)"
          bgColor="#0000"
          network="instagram"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          data-pointer-grow
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--foreground-hex)"
          bgColor="#0000"
          network="twitter"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
    </div>
  );
}
