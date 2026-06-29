import ProfilePicture from "./ProfilePicture.tsx";

export default function Hero() {
  return (
    <>
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

    </>
  );
}