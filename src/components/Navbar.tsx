import {useEffect, useState} from "react";

import {FaMoon, FaSun} from "react-icons/fa";

export default function Navbar() {


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
    <div className="w-full max-w-3xl mx-auto h-16 px-16 portrait:px-6 flex justify-end items-center shrink-0 absolute top-0 left-1/2 -translate-x-1/2 z-10 font-stretch-85%">

      <nav
        className="flex justify-center items-center gap-4 md:gap-6 font-bold text-body tracking-tight"
        style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
      >

        <button className="cursor-pointer hover:text-accent flex flex-row items-center text-bold px-1 rounded-sm"
          onClick={() => setIsDark(!isDark)}
        >
          <p className="text-accent">[</p>
          &nbsp;{isDark ? <FaMoon className="size-3"/> : <FaSun className="size-3.5"/>}&nbsp;
          <p className="text-accent">]</p>
        </button>

      </nav>
    </div>

  )
}