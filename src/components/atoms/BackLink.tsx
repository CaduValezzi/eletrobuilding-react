import Link from "next/link";

type BackLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function BackLink({ href, label, className = "" }: BackLinkProps) {
  const base =
    "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors";
  const defaultColors = "text-muted hover:text-volt-dim";

  return (
    <Link href={href} className={`${base} ${className || defaultColors}`}>
      <span aria-hidden>←</span>
      {label}
    </Link>
  );
}
