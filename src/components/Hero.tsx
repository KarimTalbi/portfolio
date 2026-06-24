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
        <nav className="flex gap-6 md:gap-8 text-sm font-bold text-body tracking-tighter">
          <a href="#about" onClick={(e) => handleNavClick(e, 0)} className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-0.5 text-neutral-500">[ABOUT]</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 1)} className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-0.5 text-neutral-500">[PROJECTS]</a>
          <a href="#stack" onClick={(e) => handleNavClick(e, 2)} className="hover:text-accent transition-colors bg-[#f5f4ed] rounded-[3px] px-0.5 text-neutral-500">[STACK]</a>
        </nav>
      </header>

      {/* 2. Main Hero Split Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-12 md:py-12 min-h-0">

        <div className="md:col-span-5 flex justify-center md:justify-end w-full order-first md:order-last">
          <div className="blob w-full  max-w-60 aspect-square overflow-hidden">
            <img
              src="/src/assets/profile.png"
              alt="Hamza Karim Talbi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Side: Text and Actions */}
        <div className="md:col-span-7 flex flex-col items-start text-left h-full justify-center">

          {/* Accent Label */}
          <span className="text-sm uppercase font-bold tracking-tighter mb-3 text-neutral-500">
            [AI & Software Engineer]
          </span>

          {/* Main Typography Headline with much cleaner dynamic scales */}
          <h1 className="font-bold leading-[1.1] mb-4 font-stretch-75% text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hello, my name is
            <span className="bg-[#f5f4ed] rounded-[3px] px-0.5 normal-case tracking-normal mx-1">Karim Talbi</span>
          </h1>

          {/* Paragraph Bio Description */}
          <p className="text-body max-w-xl text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            Short text with details about you, what you do, or your professional career.
            You can highlight your core technical focus, framework specialization,
            or what drives your passion for building complex systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="tooltip tooltip-bottom" data-tip="GitHub">
              <button className="btn btn-square btn-ghost btn-sm border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer">
                <FaGithub className="size-5"/>
              </button>
            </div>

            <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
              <button className="btn btn-square btn-ghost btn-sm border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer">
                <FaLinkedin className="size-5"/>
              </button>
            </div>

            <div className="tooltip tooltip-bottom" data-tip="Instagram">
              <button className="btn btn-square btn-ghost btn-sm border-none bg-[#f5f4ed] text-neutral-500 hover:text-neutral-600 hover:bg-[#f5f4ed] cursor-pointer">
                <AiFillInstagram className="size-5.5"/>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}