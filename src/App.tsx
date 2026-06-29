import Hero from "./components/hero/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Stack from "./components/stack/stack.tsx";
import Projects from "./components/Projects/Projects.tsx";
import {SectionContainer} from "./lib/styles.ts";
import {AccentBrackets} from "./components/ui/UiElements.tsx";

function App() {

  return (
    <div className="w-full my-7">
      <div className={SectionContainer}>
        <Navbar/>
        <div id="aboutme">
          <AccentBrackets className="text-[1.5rem] py-5">about me</AccentBrackets>
          <Hero/>
        </div>

        <div id="stack">
          <AccentBrackets className="text-[1.5rem]">stack</AccentBrackets>
          <Stack/>
        </div>

        <div id="projects">
          <AccentBrackets className="text-[1.5rem]">projects</AccentBrackets>
          <Projects/>
        </div>

        <div id="contact">
          <AccentBrackets className="text-[1.5rem]">contact</AccentBrackets>
        </div>

        <div className="w-full flex justify-center items-center shrink-0 font-stretch-85%">
        <span className="text-neutral-500 text-[12px] tracking-widest">
          Designed & built by Karim Talbi · 2026
        </span>
        </div>
      </div>
    </div>
  )
}

export default App
