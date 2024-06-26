"use client";
import { ReactNode, useLayoutEffect } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import NavLink from "~/components/NavLink";
import { useSmoothScroll } from "~/context/smooth-scroll-context";
import ModalPage from "~/layouts/modal-page-layout";

export default function ({ children }: { children: ReactNode }) {
  const { startSmoothScroll } = useSmoothScroll();

  useLayoutEffect(() => {
    document.body.style.overflow = "auto";
    startSmoothScroll();
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-auto">
      <Header>
        <NavLink href="/review">Review</NavLink>
        <></>
      </Header>
      <ModalPage imageUrl="/images/mockups/work-mockup.jpeg">
        {children}
      </ModalPage>
      <Footer />
    </div>
  );
}
