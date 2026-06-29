import ProfilePicture from "./ProfilePicture.tsx";
import aboutEN from "../../content/about-en.txt?raw";
import aboutDE from "../../content/about-de.txt?raw";
import {useSettings} from "../../hooks/useSettings.tsx";

export default function Hero() {
  const {lang} = useSettings()

  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <ProfilePicture/>

        <h1 className="font-bold text-[1.2rem] font-stretch-90%">
          Hi, I'm
          <span className="px-1 ml-1 theme-accent-block font-stretch-90%">Karim.</span>
        </h1>

        <p>
          I strongly believe that AI has the potential to not only optimize processes, but measurably improve the
          way we work and live.
        </p>

        <h3 className="font-bold text-[1.1rem] font-stretch-60% theme-accent-block px-1">
          JUNIOR AI & SOFTWARE ENGINEER
        </h3>

        <p>
          {lang === "en" ? aboutEN : aboutDE}
        </p>
      </div>

    </>
  );
}