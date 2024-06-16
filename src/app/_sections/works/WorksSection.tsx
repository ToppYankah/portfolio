"use client";
import Image from "next/image";
import SectionTitle from "~/components/SectionTitle";
import SectionLayout from "~/layouts/section-layout";

export default function WorksSection() {
  return (
    <SectionLayout id="works">
      <SectionTitle
        className="items-end"
        labelClassName="self-end"
        label="Projects"
      >
        Selected\nWorks
      </SectionTitle>
      <img
        src={"/images/mockups/kenny-portfolio.jpeg"}
              alt="Portfolio Mockup"
              className="z-10 w-full h-full object-cover"
      />
    </SectionLayout>
  );
}
