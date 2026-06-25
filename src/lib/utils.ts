import {twMerge} from "tailwind-merge";
import clsx, {type ClassValue} from "clsx";

/** Merges Tailwind class names, resolving conflicts via tailwind-merge. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}