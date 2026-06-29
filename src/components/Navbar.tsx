import {useSettings} from "../hooks/useSettings.tsx";
import {AccentBrackets} from "./ui/UiElements.tsx";

export default function Navbar() {
  const {isDark, setIsDark, lang, setLang} = useSettings();

  return (
    <>
      <nav className="flex w-full justify-between items-center">
        <div className="flex flex-row gap-2">

          <a href="#aboutme">
            <AccentBrackets className="text-[0.9rem]">
              about me
            </AccentBrackets>
          </a>

          <a href="#stack">
            <AccentBrackets className="text-[0.9rem]">
              stack
            </AccentBrackets>
          </a>

          <a href="#projects">
            <AccentBrackets className="text-[0.9rem]">
              projects
            </AccentBrackets>
          </a>

          <a href="#contact">
            <AccentBrackets className="text-[0.9rem]">
              contact
            </AccentBrackets>
          </a>

        </div>

        <div className="flex flex-row gap-2">
          <button onClick={() => setLang(lang === "en" ? "de" : "en")}>
            <AccentBrackets className="text-[0.9rem]">
              {lang}
            </AccentBrackets>
          </button>

          <button onClick={() => setIsDark(!isDark)}>
            <AccentBrackets className="text-[0.9rem]">
              {isDark ? "DARK" : "LIGHT"}
            </AccentBrackets>
          </button>
        </div>

      </nav>
    </>

  )
}