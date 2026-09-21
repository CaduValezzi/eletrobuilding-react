import type { DividerProps } from "./Divider.types";

export function Divider({ className = "" }: DividerProps) {
  return <div className={`h-px w-full bg-line ${className}`} aria-hidden />;
}
