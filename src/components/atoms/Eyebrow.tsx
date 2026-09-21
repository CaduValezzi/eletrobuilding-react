"use client";

import { useRef } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

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
