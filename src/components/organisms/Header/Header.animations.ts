import { RefObject, useRef } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type MobileMenuRefs = {
  panelRef: RefObject<HTMLDivElement>;
  linkRefs: RefObject<(HTMLElement | null)[]>;
};

export function useMobileMenuTimeline(isOpen: boolean, { panelRef, linkRefs }: MobileMenuRefs) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const reduced = prefersReducedMotion();

  // Build the (paused) timeline once on mount — never rebuilt on toggle.
  // Rebuilding a timeline with a trailing zero-duration `.set()` on every
  // open/close was the original bug: GSAP applies `.set()` calls immediately
  // when they're added to an active timeline, regardless of their scheduled
  // position, so the "display: none" meant for the end of the close
  // animation fired the instant the timeline was created — before the
  // opening animation ever got a chance to run.
  useIsomorphicLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || reduced) return;

    gsap.set(panel, { display: "flex", autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
    gsap.set(linkRefs.current, { autoAlpha: 0, y: 24 });

    const tl = gsap
      .timeline({ paused: true })
      .to(panel, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.5, ease: "power3.inOut" })
      .to(
        linkRefs.current,
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power2.out" },
        "-=0.2"
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Play forward to open, reverse to close.
  useIsomorphicLayoutEffect(() => {
    const panel = panelRef.current;

    if (reduced) {
      if (panel) gsap.set(panel, { display: isOpen ? "flex" : "none" });
      return;
    }

    const tl = timelineRef.current;
    if (!tl) return;

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen, reduced]);
}
