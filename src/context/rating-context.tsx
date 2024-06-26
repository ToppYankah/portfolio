"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const RatingContext = createContext<{
  rating: number;
  setRating: (value: number) => void;
}>({
  rating: 0,
  setRating: () => {},
});

export const useRating = () => useContext(RatingContext);

export default function RatingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [rating, setRating] = useState<number>(0);

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
}
