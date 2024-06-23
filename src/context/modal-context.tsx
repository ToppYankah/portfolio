"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import ModalView from "~/components/ModalView";
import { ModalData, ModalInterface } from "~/interfaces/interfaces";

const ModalContext = createContext<ModalInterface>({
  showModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext<ModalInterface>(ModalContext);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ModalData>({ node: null, state: "closed" });

  const showModal = (node: ReactNode, label?: string) => {
    setData({ ...data, state: "opening" });
    setTimeout(() => setData({ node, state: "opened", label }), 800);
  };

  const closeModal = () => {
    setData({ ...data, state: "closing" });
    setTimeout(() => setData({ node: null, state: "closed" }), 800);
  };

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      <ModalView data={data} />
      {children}
    </ModalContext.Provider>
  );
};
