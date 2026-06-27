import {cn} from "../../lib/utils.ts";

import subject from "../../assets/Subject.png";

export default function Hero() {
  return (

    <div
      className={cn(
        "w-full max-w-3xl mx-auto px-16",
        "flex flex-col gap-3 items-start justify-center",
        "portrait:mx-0 portrait:px-6"
      )}>

      <h2 className="font-bold tracking-wide font-stretch-75% flex flex-row pt-16"
          style={{fontSize: "clamp(20px, 3vw, 25px)"}}
      >
        <span className="text-accent">[</span>
        &nbsp;ME&nbsp;
        <span className="text-accent">]</span>
      </h2>

      <div className="flex flex-row items-center py-7">
        <div
          className={cn("size-35 blob shrink-0 relative overflow-hidden bg-accent")}
        >
          <img
            src={subject}
            alt="Karim"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2  w-[90%] h-[90%] object-contain object-bottom"
          />
        </div>
      </div>

      <h1
        className="font-bold leading-[0.9] font-stretch-75% w-full"
        style={{fontSize: "clamp(20px, 3vw, 25px)"}}
      >
        Hi, I'm

        <span
          className="leading-[0.9] rounded-sm tracking-normal inline-block px-1 py-0.5 ml-2 bg-page-accent text-page-accent-text"
        >
          Karim.
        </span>

      </h1>

      <p style={{fontSize: "clamp(14px, 1.5vw, 16px)"}}>
        I combine a unique background in engineering and entrepreneurship with technical expertise in Python,
        React, TypeScript and SQL to architect intelligent, highly efficient software that empowers teams and
        turns the potential of AI into real-world human impact.
      </p>
      <p style={{fontSize: "clamp(14px, 1.5vw, 16px)"}}>
        I strongly believe that AI has the potential to not only optimize processes, but measurably improve the
        way we work and live.
      </p>

      <h3 className="font-bold font-stretch-75% bg-page-accent text-page-accent-text px-1 rounded-sm mt-2"
          style={{fontSize: "clamp(16px, 2.5vw, 20px)"}}>
        JUNIOR AI & SOFTWARE ENGINEER
      </h3>

    </div>
  );
}