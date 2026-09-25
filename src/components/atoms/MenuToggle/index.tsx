"use client";

import { useRef } from "react";
import type { MenuToggleProps } from "./MenuToggle.types";
import { useMenuToggleAnimation } from "./MenuToggle.animations";

export function MenuToggle({ open, onClick, className = "" }: MenuToggleProps) {
  const topRef = useRef<SVGLineElement>(null);
  const midRef = useRef<SVGLineElement>(null);
  const bottomRef = useRef<SVGLineElement>(null);

  useMenuToggleAnimation(open, { topRef, midRef, bottomRef });

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center border border-line text-foam transition-colors hover:border-volt hover:text-volt-dim ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <line ref={topRef} x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line ref={midRef} x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line ref={bottomRef} x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </button>
  );
}
