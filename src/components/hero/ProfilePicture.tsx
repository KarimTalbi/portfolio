import {cn} from "../../lib/utils.ts";
import subject from "../../assets/Subject.png";

export default function ProfilePicture() {
  return (
    <div className="py-7">
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
  )
}