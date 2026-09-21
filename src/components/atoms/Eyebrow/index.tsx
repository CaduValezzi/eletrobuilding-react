"use client";

import { useRef } from "react";
import type { EyebrowProps } from "./Eyebrow.types";
import { useEyebrowReveal } from "./Eyebrow.animations";

export function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useEyebrowReveal(ref);

  return (
    <span
      ref={ref}
      className={`font-mono text-xs uppercase tracking-[0.28em] ${
        light ? "text-ink" : "text-volt-dim"
      } ${className}`}
    >
      {children}
    </span>
  );
}
