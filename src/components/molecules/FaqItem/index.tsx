"use client";

import { useState } from "react";
import type { FaqItemProps } from "./FaqItem.types";

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold uppercase tracking-tight text-foam md:text-xl">
          {question}
        </span>
        <span
          className={`shrink-0 font-mono text-xl text-volt-dim transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="min-h-0 max-w-2xl text-sm leading-relaxed text-muted">{answer}</p>
      </div>
    </div>
  );
}
