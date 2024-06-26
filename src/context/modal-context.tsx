"use client";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";
import { ModalData, ModalInterface } from "~/interfaces/interfaces";

const ModalContext = createContext<ModalInterface>({
  showModal: () => {},
  closeModal: () => {},
  data: { state: "closed" },
});

export const useModal = () => useContext<ModalInterface>(ModalContext);

export const ModalContextProvider = ({
  children,
  node,
}: {
  node: ReactNode;
  children: ReactNode;
}) => {
  const router = useRouter();
  const [data, setData] = useState<ModalData>({ state: "closed" });

  const showModal = (callback?: () => void | null, label?: string) => {
    setData({ ...data, state: "opening" });
    setTimeout(() => {
      setData({ state: "opened", label });
      if (callback !== undefined) callback();
    }, 800);
  };

  const closeModal = () => {
    setData({ ...data, state: "closing" });
    setTimeout(() => {
      setData({ state: "closed" });
      router.back();
    }, 800);
  };

  return (
    <ModalContext.Provider value={{ data, showModal, closeModal }}>
      {node}
      {children}
      <div id="modal-root" />
    </ModalContext.Provider>
  );
};
