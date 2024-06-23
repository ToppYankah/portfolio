"use client";

import { useLayoutEffect, useState } from "react";

const GridSquare = ({ active = false }: { active: boolean }) => {
  return (
    <div
      className={`hidden h-full w-full md:flex ${active ? "active" : ""} grid-tile`}
    />
  );
};

export default () => {
  const [activeGrid, setActiveGrid] = useState<number | null>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const gridSize = 10;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const gridHeight = windowHeight / gridSize;
      const gridWidth = windowWidth / gridSize;

      const mouseY = event.clientY;
      const mouseX = event.clientX;

      const row = Math.floor(mouseY / gridHeight);
      const col = Math.floor(mouseX / gridWidth);

      const gridIndex = row * gridSize + col;

      setActiveGrid(gridIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="interactive-grid"
      className="pointer-events-none fixed inset-0 z-[2] grid grid-cols-10 grid-rows-10"
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <GridSquare key={index} active={activeGrid == index} />
      ))}
    </div>
  );
};
