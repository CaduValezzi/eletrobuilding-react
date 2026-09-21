import { RefObject } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

type VoltTraceRefs = {
  svgRef: RefObject<SVGSVGElement>;
  pathRef: RefObject<SVGPathElement>;
  dotsRef: RefObject<(SVGCircleElement | null)[]>;
};

export function useVoltTraceAnimation({ svgRef, pathRef, dotsRef }: VoltTraceRefs) {
  useIsomorphicLayoutEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();

      if (prefersReducedMotion()) {
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
        gsap.set(dotsRef.current, { scale: 1 });
        return;
      }

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(dotsRef.current, { scale: 0, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "40% center", once: true, markers: true,},
      });

      tl.to(path, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }).to(
        dotsRef.current,
        { scale: 1, duration: 0.45, ease: "back.out(2.4)", stagger: 0.15 },
        "-=0.35"
      );

      // Gentle current-flowing pulse once the trace has finished drawing in.
      gsap.to(dotsRef.current, {
        opacity: 0.35,
        duration: 1.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, repeat: -1 },
        delay: 2.1,
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);
}
