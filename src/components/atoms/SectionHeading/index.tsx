"use client";

import { useRef } from "react";
import type { SectionHeadingProps } from "./SectionHeading.types";
import { useSectionHeadingReveal } from "./SectionHeading.animations";

export function SectionHeading({ children, className = "", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  const ref = useRef<HTMLHeadingElement>(null);
  useSectionHeadingReveal(ref);

  return (
    <Tag
      ref={ref}
      className={`font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foam md:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}
