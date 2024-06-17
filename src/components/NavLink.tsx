"use client";
import { AnchorHTMLAttributes } from "react";
import Magnetic from "./Magnetic";

type NavLinkProps = {
  className?: string;
  children?: string;
  active?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink = ({ active, children, className, ...props }: NavLinkProps) => {
  return (
    <Magnetic>
      <a
        {...props}
        className={`relative group self-start overflow-hidden text-sm ${className || ""}`}
      >
        <div
          className={`pointer-events-none flex max-h-[1.5em] flex-col before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left  before:transition-transform before:duration-500 before:content-['_'] group-hover:before:scale-x-100 ${active ? "before:scale-x-[0.5]" : "before:scale-x-0"} before:bg-inverted`}
        >
          <span className="transform transition duration-300 group-hover:-translate-y-[100%]">
            {children}
          </span>
          <span className="transform transition duration-300 group-hover:-translate-y-[100%]">
            {children}
          </span>
        </div>
      </a>
    </Magnetic>
  );
};

export default NavLink;
