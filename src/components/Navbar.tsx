import React, {useEffect, useState} from "react";
import {cn} from "../lib/utils.ts";
import {AccentBg} from "../lib/styles.ts";
import {ThemeToggle} from "./ThemeToggle.tsx";

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

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return (
    <div className="w-full max-w-7xl h-16 flex justify-center items-center shrink-0 absolute top-0 left-1/2 -translate-x-1/2 z-10">

      <nav
        className="flex gap-4 md:gap-6 font-bold text-body tracking-tight text-page-accent-text"
        style={{ fontSize: "clamp(18px, 1.1vw, 18px)" }}
      >
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, 0)}
          className={cn("rounded-sm px-1 bg-page-accent")}
        >
          [&nbsp;about&nbsp;]
        </a>

        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, 1)}
          className={cn("rounded-sm px-1 bg-page-accent")}
        >
          [&nbsp;projects&nbsp;]
        </a>

        <a
          href="#stack"
          onClick={(e) => handleNavClick(e, 2)}
          className={cn("rounded-sm px-1 bg-page-accent")}
        >
          [&nbsp;stack&nbsp;]
        </a>

        <button className="bg-page-accent rounded-sm px-1" onClick={() => setIsDark(!isDark)}>
          [&nbsp;
          {isDark ? "dark mode" : "light mode"}
          &nbsp;]
        </button>

      </nav>
    </div>

  )
}