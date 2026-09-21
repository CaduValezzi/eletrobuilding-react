"use client";

import { useRef } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.15 })
        .fromTo(titleRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.75 })
        .fromTo(
          descRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-graphite-950 pb-16 pt-40 md:pt-48">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-grid-fade" />
      <div className="container-edge">
        <Eyebrow className="mb-6 block">{eyebrow}</Eyebrow>
        <h1
          ref={titleRef}
          className="max-w-3xl font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-foam md:text-6xl"
        >
          {title}
        </h1>
        {description && (
          <p
            ref={descRef}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
