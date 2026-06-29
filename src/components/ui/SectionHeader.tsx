import React from "react"

export function SectionHeader({children}: { children?: React.ReactNode }) {
  return (
    <div className="">
      <h2 className="font-bold tracking-wide font-stretch-75% flex flex-row pt-16"
          style={{fontSize: "clamp(20px, 3vw, 25px)"}}
      >
        <span className="text-accent">[&nbsp;</span>
        {children}
        <span className="text-accent">&nbsp;]</span>
      </h2>
    </div>
  )
}