"use client";

import Link from "next/link";
import type { NavLinkProps } from "./NavLink.types";
import { useIsActiveRoute } from "./NavLink.hooks";

export function NavLink({ href, label }: NavLinkProps) {
  const isActive = useIsActiveRoute(href);

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
