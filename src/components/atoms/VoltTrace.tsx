"use client";

import { useRef } from "react";
import { gsap, useIsomorphicLayoutEffect, prefersReducedMotion } from "@/lib/gsap";

const TRACE_PATH =
  "M0 340 H140 L180 300 L220 340 L260 260 L300 340 H420 L460 200 L500 340 H620 L660 120 L700 340 H900";
const DOT_POSITIONS = [140, 300, 420, 620, 900];

export function VoltTrace({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);

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
        scrollTrigger: { trigger: svg, start: "top 85%", once: true },
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

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 900 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d={TRACE_PATH} stroke="rgba(245,183,0,0.14)" strokeWidth="2" />
      <path ref={pathRef} d={TRACE_PATH} stroke="#F5B700" strokeWidth="2" strokeLinecap="round" />
      {DOT_POSITIONS.map((cx, i) => (
        <circle
          key={cx}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          cx={cx}
          cy={340}
          r="4"
          fill="#F5B700"
        />
      ))}
    </svg>
  );
}
