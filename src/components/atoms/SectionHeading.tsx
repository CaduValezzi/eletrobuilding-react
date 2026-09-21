"use client";

import { useRef } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({ children, className = "", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  const ref = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foam md:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}
