import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "de";

interface SettingsContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  // Theme state + system fallback
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Language state + system fallback
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "en" || saved === "de") return saved;
    return navigator.language.startsWith("de") ? "de" : "en";
  });

  // Sync mutations to attributes and localStorage
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  return (
    <SettingsContext.Provider value={{ isDark, setIsDark, lang, setLang }}>
  {children}
  </SettingsContext.Provider>
);
}

// Custom hook for simple component access
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsProvider");
  return context;
}