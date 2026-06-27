import {cn} from "../../lib/utils.ts";
import ContactButtons from "./ContactButtons.tsx";
import ProfilePicture from "./ProfilePicture.tsx";

export default function Hero() {
  return (

    <div
      className={cn(
        "w-full max-w-6xl pt-16 mx-auto px-16",
        "flex flex-col-reverse gap-10 items-start justify-center",
        "min-h-screen overflow-hidden",
        "portrait:flex-col-reverse portrait:justify-center portrait:mx-0 portrait:px-6 portrait:pt-0 portrait:gap-10"
      )}>

      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col items-start text-left h-full justify-center w-full">

          <h1
            className="font-bold leading-[0.9] font-stretch-75% mb-4 w-full"
            style={{ fontSize: "clamp(30px, 3vw, 40px)" }}
          >
            Hi, I'm
            <span
              className="leading-[0.9] rounded-sm tracking-normal inline-block px-1 ml-2 bg-page-accent text-page-accent-text">
              Karim.
            </span>
          </h1>

        </div>

        <div className="flex flex-col gap-10 portrait:gap-[5.6vw]">
          <div className="w-full">
            <div>
              <p className="leading-[1.3]" style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}>
                I combine a unique background in engineering and entrepreneurship with technical expertise in Python, React, TypeScript and SQL to architect intelligent, highly efficient software that empowers teams and turns the potential of AI into real-world human impact.
                <br/>
                <br/>
                I strongly believe that AI has the potential to not only optimize processes, but measurably improve the way we work and live.
              </p>
            </div>

          </div>

          <div>
              <span className="font-bold tracking-wide font-stretch-75%" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
                [&nbsp;JUNIOR AI & SOFTWARE ENGINEER&nbsp;]
              </span>
          </div>

          <ContactButtons/>

        </div>
      </div>

     <ProfilePicture/>

    </div>
  );
}