"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 hover:text-volt-dim ${
        isActive ? "text-volt-dim" : "text-muted"
      }`}
    >
      {label}
    </Link>
  );
}
