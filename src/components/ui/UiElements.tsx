import React from "react";
import {cn} from "../../lib/utils.ts";

export const AccentBrackets = (
  {children, className}: { children?: React.ReactNode, className?: string }
) => (
  <p className={cn("text-page-accent font-bold tracking-tight font-stretch-75%", className)}>
    [
    <span className="text-page-text uppercase hover:text-page-accent">
      {children}
    </span>
    ]
  </p>
)

