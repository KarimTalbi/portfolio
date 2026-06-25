import {cn} from "../lib/utils.ts";

import subject from '../assets/Subject.png'

import {IoMail} from "react-icons/io5";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

export default function Hero() {
  return (

    <div
      className={cn(
        "w-full pt-16 max-w-7xl mx-auto px-16 ",
        "flex flex-row gap-[5vw] items-center justify-between",
        "min-h-screen overflow-hidden",
        "portrait:px-6 portrait:flex-col-reverse portrait:justify-center"
      )}>

      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col items-start text-left h-full  justify-center w-full">

          <h1
            className="font-bold leading-[0.9] font-stretch-75% mb-4 w-full text-nowrap"
            style={{fontSize: "clamp(24px, 4vw, 60px)"}}
          >
            Hello, my name is
            <span
              className="leading-[0.9] rounded-sm tracking-normal inline-block py-2 ml-2 px-3 whitespace-nowrap bg-page-accent text-page-accent-text">
              Karim Talbi
            </span>
          </h1>

        </div>

        <div className=" flex-1 gap-[2vw]">
          <p
            className="font-stretch-85% leading-[1.3] mb-6 text-justify"
            style={{fontSize: "clamp(15px, 1.8vw, 30px)"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <div className="flex flex-wrap items-center gap-3">
              <span
                className="font-bold tracking-wide font-stretch-75% w-full text-nowrap mb-6"
                style={{fontSize: "clamp(18px, 2.5vw, 30px)"}}
              >
            [&nbsp;JUNIOR AI ENGINEER&nbsp;]
          </span>

            <button
              className="btn btn-sm px-2 btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text hover:text-accent">
              <FaGithub className="size-5"/>
            </button>
            <button
              className="btn btn-sm px-2 btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text hover:text-accent">
              <FaLinkedin className="size-5"/>
            </button>
            <button
              className="btn btn-sm px-2 btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text hover:text-accent">
              <AiFillInstagram className="size-5"/>
            </button>
            <button
              className="btn btn-sm px-2 btn-ghost border-none rounded-sm bg-page-accent text-page-accent-text hover:text-accent">
              <IoMail className="size-5"/>
            </button>
          </div>

        </div>
      </div>

      <div
        className={cn("blob shrink-0 relative overflow-hidden bg-page-accent portrait:mb-15")}
        style={{width: "clamp(200px, 25vw, 400px)", height: "clamp(200px, 25vw, 400px)"}}
      >
        <img
          src={subject}
          alt="Hamza Karim Talbi"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] object-contain object-bottom"
        />
      </div>

    </div>
  );
}