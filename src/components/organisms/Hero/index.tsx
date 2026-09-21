"use client";

import { useRef } from "react";
import Image from "next/image";
import { hero } from "@/lib/content";
import { Button } from "@/components/atoms/Button";
import { VoltTrace } from "@/components/atoms/VoltTrace";
import { useHeroTimeline } from "./Hero.animations";

export function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useHeroTimeline({ eyebrowRef, lineRefs, paragraphRef, ctaRef });

  return (
    <section id="top" className="relative overflow-hidden bg-graphite-950">
      <div className="relative min-h-[640px] w-full md:min-h-[760px]">
        <Image
          src="/images/electricity.webp"
          alt="Torres de transmissão de energia elétrica contra o céu"
          fill
          priority
          className="object-cover"
        />
        {/* Dark scrim for text legibility on the left/top of the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        {/* Fade the photo into the page's white background at the bottom seam */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-graphite-950 md:h-40" />

        <div className="container-edge relative flex min-h-[640px] flex-col justify-center pb-20 pt-40 md:min-h-[760px] md:pb-28 md:pt-48">
          <div>
            <span
              ref={eyebrowRef}
              className="mb-6 block font-mono text-xs uppercase tracking-[0.28em] text-volt"
            >
              {hero.eyebrow}
            </span>

            <h1 className="max-w-4xl font-display text-6xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-8xl">
              {hero.titleLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      lineRefs.current[i] = el;
                    }}
                    className="block"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              ref={paragraphRef}
              className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              {hero.description}
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline-light">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-1">
        <VoltTrace className="h-auto w-full" />
      </div>

      <div className="container-edge">
        <div className="hairline border-t-0 border-x-0 border-b py-6">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted md:text-sm">
            {hero.stripText}
          </p>
        </div>
      </div>
    </section>
  );
}
