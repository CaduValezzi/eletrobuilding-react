import { RefObject } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type BarRefs = {
  topRef: RefObject<SVGLineElement>;
  midRef: RefObject<SVGLineElement>;
  bottomRef: RefObject<SVGLineElement>;
};

export function useMenuToggleAnimation(open: boolean, { topRef, midRef, bottomRef }: BarRefs) {
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const duration = 0.35;
      const ease = "power2.inOut";

      gsap.to(topRef.current, {
        rotate: open ? 45 : 0,
        y: open ? 5 : 0,
        transformOrigin: "center",
        duration,
        ease,
      });
      gsap.to(midRef.current, {
        autoAlpha: open ? 0 : 1,
        duration: duration * 0.6,
        ease,
      });
      gsap.to(bottomRef.current, {
        rotate: open ? -45 : 0,
        y: open ? -5 : 0,
        transformOrigin: "center",
        duration,
        ease,
      });
    });

    return () => ctx.revert();
  }, [open]);
}
