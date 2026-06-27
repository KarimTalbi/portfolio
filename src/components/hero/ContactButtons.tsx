import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {IoMail} from "react-icons/io5";

export default function ContactButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">


      <button className="cursor-pointer hover:text-accent">
        <FaGithub className="size-7"/>
      </button>
      <button className="cursor-pointer hover:text-accent">
        <FaLinkedin className="size-7"/>
      </button>
      <button className="cursor-pointer hover:text-accent">
        <AiFillInstagram className="size-7"/>
      </button>
      <button className="cursor-pointer hover:text-accent">
        <IoMail className="size-7"/>
      </button>

    </div>
  )
}