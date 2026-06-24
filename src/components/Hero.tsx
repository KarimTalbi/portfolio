import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Hero() {
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

  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 flex flex-col h-full overflow-hidden">

      {/* 1. Header / Navigation Bar */}
      <header className="w-full py-6 flex justify-end items-center shrink-0">
        <nav
          className="flex gap-4 md:gap-6 font-bold text-body tracking-tighter"
          style={{ fontSize: "clamp(13px, 1.1vw, 16px)" }}
        >
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 0)}
            className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-2 py-0.5 text-neutral-500"
          >
            [&nbsp;about&nbsp;]
          </a>

          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 1)}
            className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-2 py-0.5 text-neutral-500"
          >
            [&nbsp;projects&nbsp;]
          </a>

          <a
            href="#stack"
            onClick={(e) => handleNavClick(e, 2)}
            className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-2 py-0.5 text-neutral-500"
          >
            [&nbsp;stack&nbsp;]
          </a>
        </nav>
      </header>

      {/* 2. Main Hero Split Content */}
      <main className="flex-1 grid grid-cols-1 landscape:grid-cols-12 gap-0 landscape:gap-16 items-center py-4 landscape:py-8 min-h-0">

        {/* Profile Image Column */}
        <div className="landscape:col-span-5 flex justify-center w-full order-first landscape:order-last mb-20">
          {/* Upped the max cap from 340px to 420px so it fills out a wide desktop split nicely */}
          {/* Swapping 35vmin for 25vw forces the image to track the horizontal window edge directly */}
          <div
            className="blob shrink-0"
            style={{
              width: "clamp(180px, 40vw, 500px)",
              height: "clamp(180px, 40vw, 500px)"
            }}
          >
            <img
              src="/src/assets/profile.png"
              alt="Hamza Karim Talbi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Side: Text and Actions */}
        <div className="landscape:col-span-7 flex flex-col items-start text-left h-full justify-center">

          {/* Accent Label */}
          <span
            className="font-bold tracking-wide text-neutral-500 mb-2"
            style={{ fontSize: "clamp(20px, 1.5vw, 30px)" }}
          >
            [&nbsp;JUNIOR AI ENGINEER&nbsp;]
          </span>

          {/* Headline: Max ceiling increased from 54px to 76px for that heavy, architectural desktop impact */}
          <h1
            className="font-black tracking-tight leading-[0.9] mb-4 font-stretch-75% text-nowrap uppercase text-neutral-700"
            style={{ fontSize: "clamp(30px, 4.5vw, 76px)" }}
          >
            Hello, <br/> my name is <br/>
            <span className="bg-[#f5f4ed] leading-[0.9] rounded-md tracking-normal inline-block">Karim Talbi</span>
          </h1>

          {/* Paragraph Bio Description: Max ceiling slightly nudged up for reading comfort on big monitors */}
          <p
            className=" font-stretch-108% max-w-3xl leading-relaxed mb-6 text-justify"
            style={{ fontSize: "clamp(20px, 1.7vw, 30px)" }}
          >
            Short text with details about you, what you do, or your professional career.
            You can highlight your core technical focus, framework specialization,
            or what drives your passion for building complex systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="tooltip tooltip-bottom" data-tip="GitHub">
              <button className="btn btn-square btn-ghost border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer w-10 h-10 min-h-0">
                <FaGithub className="text-xl"/>
              </button>
            </div>

            <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
              <button className="btn btn-square btn-ghost border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer w-10 h-10 min-h-0">
                <FaLinkedin className="text-xl"/>
              </button>
            </div>

            <div className="tooltip tooltip-bottom" data-tip="Instagram">
              <button className="btn btn-square btn-ghost border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer w-10 h-10 min-h-0">
                <AiFillInstagram className="text-2xl"/>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}