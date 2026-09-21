export function Numeral({ value, className = "" }: { value: string; className?: string }) {
  return (
    <span className={`font-mono text-sm text-volt-dim ${className}`} aria-hidden>
      {value}
    </span>
  );
}
