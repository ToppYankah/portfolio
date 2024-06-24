"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import CoverSheet from "~/components/CoverSheet";
import { CoverSheetInterface } from "~/interfaces/interfaces";

export type CoverSheetState = "opening" | "opened" | "closing" | "closed";

const CoverSheetContext = createContext<CoverSheetInterface>({
  show: (cb?: () => void) => {},
  hide: (cb?: () => void) => {},
});

export const useCoverSheet = () =>
  useContext<CoverSheetInterface>(CoverSheetContext);

export const CoverSheetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<CoverSheetState>("closed");

  const show = (cb?: () => void) => {
    setState("opening");
    setTimeout(() => {
      setState("opened");
      if (cb) cb();
    }, 800);
  };

  const hide = (cb?: () => void) => {
    if (state !== "opened") {
      if (cb) cb();
      return;
    }

    setState("closing");
    setTimeout(() => {
      setState("closed");
      if (cb) cb();
    }, 800);
  };

  return (
    <CoverSheetContext.Provider value={{ show, hide }}>
      <CoverSheet state={state} />
      {children}
    </CoverSheetContext.Provider>
  );
};
