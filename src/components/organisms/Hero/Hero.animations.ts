import { RefObject } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type HeroRefs = {
  eyebrowRef: RefObject<HTMLSpanElement>;
  lineRefs: RefObject<(HTMLSpanElement | null)[]>;
  paragraphRef: RefObject<HTMLParagraphElement>;
  ctaRef: RefObject<HTMLDivElement>;
};

export function useHeroTimeline({ eyebrowRef, lineRefs, paragraphRef, ctaRef }: HeroRefs) {
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(eyebrowRef.current, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(
          lineRefs.current,
          { yPercent: 115 },
          { yPercent: 0, duration: 0.9, stagger: 0.12 },
          "-=0.25"
        )
        .fromTo(
          paragraphRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);
}
