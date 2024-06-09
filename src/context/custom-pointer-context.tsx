"use client";
import { ReactNode, createContext, useState } from "react";

export type HoverState = {
  hoveredLink: boolean;
  hoverText: string | null;
  setHoveredLink: (hovered: boolean, hoverText: string | null) => void;
};

export const PointerContext = createContext<HoverState>({
  hoverText: "",
  hoveredLink: false,
  setHoveredLink: (_, __) => {},
});

export const CustomPointerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [hoveredLink, setHovered] = useState<boolean>(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const setHoveredLink = (hovered: boolean, hoverText: string | null) => {
    setHovered(() => hovered);
    setHoverText(() => hoverText ?? null);
  };

  return (
    <PointerContext.Provider value={{ hoveredLink, hoverText, setHoveredLink }}>
      {children}
    </PointerContext.Provider>
  );
};
