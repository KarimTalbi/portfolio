import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {IoMail} from "react-icons/io5";

export default function Projects() {
  return (
    <>

      <div>
        <span className="font-bold tracking-wide font-stretch-75% flex flex-row my-5"
              style={{fontSize: "clamp(20px, 3vw, 25px)"}}>
                <p className="text-accent">[</p>
          &nbsp;PROJECTS & CONTACT&nbsp;
          <p className="text-accent">]</p>
              </span>
      </div>

      <div className="flex flex-col gap-10">

        <div style={{fontSize: "clamp(14px, 1.5vw, 16px)"}}>
          Let’s build something intelligent together.
          Whether you're looking to expand your team, discuss an interesting project, or want to review the source code
          behind my projects on GitHub - I’d love to hear from you.
        </div>

        <div className="flex flex-row items-center justify-center gap-5 text-accent">

          <a href="https://github.com/KarimTalbi" className="cursor-pointer hover:text-accent" target="_blank" rel="noreferrer noopener">
            <FaGithub className="size-9"/>
          </a>

          <a href="https://www.linkedin.com/in/hamza-karim-talbi" className="cursor-pointer hover:text-accent" target="_blank" rel="noreferrer noopener">
            <FaLinkedin className="size-9"/>
          </a>

          <a href="https://www.instagram.com/karimtalbii/" className="cursor-pointer hover:text-accent" target="_blank" rel="noreferrer noopener">
            <AiFillInstagram className="size-9.5"/>
          </a>

          <a href="mailto:contact@karimtalbi.com" className="cursor-pointer hover:text-accent">
            <IoMail className="size-9.5"/>
          </a>

        </div>

      </div>

    </>
  )
}