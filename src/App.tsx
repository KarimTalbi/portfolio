import Hero from "./components/hero/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Stack from "./components/stack/stack.tsx";
import Projects from "./components/Projects/Projects.tsx";
import {SectionHeader} from "./components/ui/SectionHeader.tsx";
import {SectionContainer} from "./lib/styles.ts";

function App() {

  return (
    <div className="w-full mb-10 flex flex-col items-center justify-center">
      <div className={SectionContainer}>
      <Navbar/>
      <Hero/>
      <SectionHeader>Stack</SectionHeader>
      <Stack/>
      <Projects/>

      <div className="w-full max-w-3xl mx-auto h-16 px-16 portrait:px-6 flex justify-center items-center shrink-0 font-stretch-85%">
        <span className="text-neutral-500 text-[12px] tracking-widest">
          Designed & built by Karim Talbi · 2026
        </span>
      </div>
      </div>
    </div>
  )
}

export default App
