import React from "react";
import {cn} from "../lib/utils.ts";
import {AccentBg} from "../lib/styles.ts";
import {ColorSwitcher} from "./ColorSwitcher.tsx";

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionIndex: number) => {
    e.preventDefault();

    const container = document.querySelector('.h-screen.overflow-y-scroll');

    if (container) {
      const containerHeight = container.clientHeight;
      container.scrollTo({
        top: sectionIndex * containerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full h-16 flex justify-between items-center shrink-0 absolute top-0 right-0 z-10">

      <ColorSwitcher/>

      <nav
        className="flex gap-4 md:gap-6 font-bold text-body tracking-tight"
        style={{ fontSize: "clamp(13px, 1.1vw, 16px)" }}
      >
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, 0)}
          className={cn("rounded-sm px-1 text-acc", AccentBg)}
        >
          [&nbsp;about&nbsp;]
        </a>

        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, 1)}
          className={cn("rounded-sm px-1 text-acc", AccentBg)}
        >
          [&nbsp;projects&nbsp;]
        </a>

        <a
          href="#stack"
          onClick={(e) => handleNavClick(e, 2)}
          className={cn("rounded-sm px-1 text-acc", AccentBg)}
        >
          [&nbsp;stack&nbsp;]
        </a>
      </nav>
      <div className="w-18"></div>
    </div>

  )
}