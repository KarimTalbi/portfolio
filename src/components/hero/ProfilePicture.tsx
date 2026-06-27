import {cn} from "../../lib/utils.ts";
import subject from "../../assets/Subject.png";

export default function ProfilePicture() {
  return (
    <div className="flex flex-row items-center gap-10">
      <div
        className={cn("size-50 blob shrink-0 relative overflow-hidden bg-page-accent portrait:size-40")}
      >
        <img
          src={subject}
          alt="Hamza Karim Talbi"
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2  w-[90%] h-[90%] object-contain object-bottom"
        />
      </div>
    </div>
  )
}