"use client";

import { useRef } from "react";
import type { VoltTraceProps } from "./VoltTrace.types";
import { TRACE_PATH, DOT_POSITIONS } from "./VoltTrace.constants";
import { useVoltTraceAnimation } from "./VoltTrace.animations";

export function VoltTrace({ className = "" }: VoltTraceProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);

  useVoltTraceAnimation({ svgRef, pathRef, dotsRef });

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
