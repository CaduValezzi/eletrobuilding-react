import { RefObject } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

export function useArticleTitleReveal(titleRef: RefObject<HTMLHeadingElement>) {
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);
}
