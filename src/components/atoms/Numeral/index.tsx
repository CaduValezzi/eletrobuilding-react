import type { NumeralProps } from "./Numeral.types";

export function Numeral({ value, className = "" }: NumeralProps) {
  return (
    <span className={`font-mono text-sm text-volt-dim ${className}`} aria-hidden>
      {value}
    </span>
  );
}
