import React, {useEffect, useState} from "react";

import {FaMoon, FaSun} from "react-icons/fa";

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, sectionIndex: number) => {
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
    <div className="w-full h-16 px-6 flex justify-center items-center shrink-0 absolute top-0 left-1/2 -translate-x-1/2 z-10 font-stretch-85%">

      <nav
        className="flex justify-center items-center gap-4 md:gap-6 font-bold text-body tracking-tight text-page-accent-text"
        style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
      >
        <button
          onClick={(e) => handleNavClick(e, 0)}
          className="rounded-sm py-1 px-2 bg-page-accent cursor-pointer hover:text-accent"
        >
          [&nbsp;about&nbsp;]
        </button>

        <button
          onClick={(e) => handleNavClick(e, 1)}
          className="rounded-sm py-1 px-2 bg-page-accent cursor-pointer hover:text-accent"
        >
          [&nbsp;projects&nbsp;]
        </button>

        <button
          onClick={(e) => handleNavClick(e, 2)}
          className="rounded-sm py-1 px-2 bg-page-accent cursor-pointer hover:text-accent"
        >
          [&nbsp;stack&nbsp;]
        </button>

        <button
          className="bg-page-accent rounded-sm py-1 px-2 flex flex-row items-center cursor-pointer hover:text-accent"
          onClick={() => setIsDark(!isDark)}
        >
          [&nbsp;{isDark ? <FaMoon className="size-3"/> : <FaSun className="size-3.5"/>}&nbsp;]
        </button>

      </nav>
    </div>

  )
}