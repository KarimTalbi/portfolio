import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { cn } from "../lib/utils.ts";
import { AccentBg } from "../lib/styles.ts";
import subject from '../assets/Subject.png'

export default function Hero() {
  return (

    <div className="w-full pt-16 max-w-7xl mx-auto px-6 md:px-16 flex flex-col min-h-screen md:h-full md:overflow-hidden">

      <div className="md:flex-1 grid grid-cols-1 landscape:grid-cols-12 gap-6 landscape:gap-12 items-center py-20 landscape:py-8 min-h-0">

        <div className="landscape:col-span-5 flex justify-center items-center w-full order-first landscape:order-last mb-8 landscape:mb-0">

          <div
            className={cn("blob shrink-0 relative overflow-hidden bg-page-accent")}
            style={{
              width: "clamp(180px, 30vw, 400px)",
              height: "clamp(180px, 30vw, 400px)"
            }}
          >
            <img
              src={subject}
              alt="Hamza Karim Talbi"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] object-contain object-bottom"
            />
          </div>

        </div>

        <div className="landscape:col-span-7 flex flex-col items-start text-left h-auto landscape:h-full justify-center pb-8 landscape:pb-0">

          <span
            className="font-bold tracking-wide mb-2"
            style={{ fontSize: "clamp(16px, 1.5vw, 30px)" }}
          >
            [&nbsp;JUNIOR AI ENGINEER&nbsp;]
          </span>

          <h1
            className="font-bold leading-[0.9] mb-4 font-stretch-75% w-full text-nowrap"
            style={{ fontSize: "clamp(24px, 4vw, 65px)" }}
          >
            Hello, my name is
            <span
              className={cn(
                "leading-[0.9] rounded-sm tracking-normal inline-block ml-2 py-2 px-3 whitespace-nowrap text-page-accent-text",
                AccentBg
              )}>
              Karim Talbi
            </span>
          </h1>

          <p
            className="font-stretch-108% max-w-3xl leading-[1.3] mb-6 text-justify"
            style={{ fontSize: "clamp(15px, 1.7vw, 30px)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className={cn("btn btn-square btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text")}>
              <FaGithub className="text-3xl"/>
            </button>
            <button className={cn("btn btn-square btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text")}>
              <FaLinkedin className="text-3xl"/>
            </button>
            <button className={cn("btn btn-square btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text")}>
              <AiFillInstagram className="text-4xl"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}