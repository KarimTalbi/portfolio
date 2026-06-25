import {useState, useEffect} from "react";

export function ThemeToggle() {

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
    <div>

      <button className="bg-page-bg text-neutral-600" onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
  );
}