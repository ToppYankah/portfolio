import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useModal } from "~/context/modal-context";
import * as animations from "../animations/global-animations";
import Magnetic from "./Magnetic";
import { ModalData } from "~/interfaces/interfaces";

const ModalView = ({ data }: { data: ModalData }) => {
  const { closeModal } = useModal();
  const modalScope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (data.state === "opened") {
        document.body.style.overflow = "hidden";
        animations.animateModalLabel();
        animations.animateModalContent();
      } else {
        document.body.style.overflow = "auto";
      }
    },
    { scope: modalScope, dependencies: [data.state] },
  );

  return (
    <div
      id="modal"
      ref={modalScope}
      data-lenis-prevent
      className={`fixed inset-0 z-[20] ${data.state} bg-accent-deep`}
    >
      <div className="modal-wrapper relative flex h-full w-full items-center justify-center bg-color">
        <div className="content-wrapper relative z-[30] w-[90%] max-w-[600px] rounded-3xl">
          <div className="mb-8 flex justify-between">
            {data.node && (
              <>
                {data.label && (
                  <div className="modal-label self-center border-l-2 border-inverted px-2 text-xs">
                    {data.label.split("").map((char, i) => (
                      <span
                        className="inline-block"
                        key={"modal-label-key-" + i}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                )}
                <Magnetic onClick={closeModal}>
                  <p className="cursor-pointer rounded-full bg-black bg-opacity-5 px-3 py-2 text-xs active:bg-black active:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:active:bg-white dark:active:bg-opacity-10">
                    Close
                  </p>
                </Magnetic>
              </>
            )}
          </div>
          <div className="content no-scrollbar max-h-[80vh] sm:max-h-[85vh] -scroll-ml-2.5 overflow-scroll">
            {data.node || <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
