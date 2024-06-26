"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModal } from "~/context/modal-context";
import * as animations from "../animations/global-animations";
import Magnetic from "./Magnetic";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const modalScope = useRef<HTMLDivElement>(null);
  const { data, showModal, closeModal } = useModal();

  useEffect(() => {
    showModal(undefined, "Contact");

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useGSAP(
    () => {
      animations.animateModalLabel();
      animations.animateModalContent();
      document.body.style.overflow = "hidden";
    },
    { scope: modalScope },
  );

  return createPortal(
    <div
      id="modal"
      ref={modalScope}
      data-lenis-prevent
      className={`fixed inset-0 z-[20] ${data.state} bg-accent-deep`}
    >
      <div className="modal-wrapper relative flex h-full w-full items-center justify-center bg-color">
        <div className="content-wrapper relative z-[30] w-[90%] max-w-[600px] rounded-3xl">
          <div className="mb-8 flex justify-between">
            <div className="modal-label self-center border-l-2 border-inverted px-2 text-xs">
              {(data.label || "").split("").map((char, i) => (
                <span className="inline-block" key={"modal-label-key-" + i}>
                  {char}
                </span>
              ))}
            </div>
            <Magnetic onClick={() => closeModal()}>
              <p className="flex cursor-pointer items-center gap-1 rounded-full bg-black bg-opacity-5 px-2 py-2 pr-3 text-xs active:bg-black active:bg-opacity-10 dark:bg-white/10 dark:active:bg-white/20">
                <span className="rounded-lg bg-gray-200 p-[4px_8px] text-[10px] text-gray-400 dark:bg-white/10 dark:text-white/30">
                  Esc
                </span>
                Close
              </p>
            </Magnetic>
          </div>
          <div className="content no-scrollbar max-h-[80vh] -scroll-ml-2.5 overflow-scroll sm:max-h-[85vh]">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
