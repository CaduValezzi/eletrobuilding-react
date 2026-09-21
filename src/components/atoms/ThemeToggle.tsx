"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center border border-line text-foam transition-colors hover:border-volt hover:text-volt-dim ${className}`}
    >
      {mounted && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          aria-hidden
        >
          {isDark ? (
            // Sun icon — shown when in dark mode, action switches to light
            <>
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="12" y1="2.5" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="21.5" y2="12" />
                <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
                <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
                <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
                <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
              </g>
            </>
          ) : (
            // Moon icon — shown when in light mode, action switches to dark
            <path
              d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.5 6.5 0 0 0 10.2 10.2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}
    </button>
  );
}
