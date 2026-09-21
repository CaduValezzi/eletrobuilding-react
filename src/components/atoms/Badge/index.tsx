import type { BadgeProps } from "./Badge.types";

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block border border-volt/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-volt-dim ${className}`}
    >
      {children}
    </span>
  );
}
