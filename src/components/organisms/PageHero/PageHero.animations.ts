import { RefObject } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type PageHeroRefs = {
  titleRef: RefObject<HTMLHeadingElement>;
  descRef: RefObject<HTMLParagraphElement>;
};

export function usePageHeroTimeline({ titleRef, descRef }: PageHeroRefs) {
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
}
