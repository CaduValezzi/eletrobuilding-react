"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import type { ThemeToggleProps } from "./ThemeToggle.types";
import { SunIcon, MoonIcon } from "./ThemeToggle.icons";

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
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
      {mounted && (isDark ? <SunIcon /> : <MoonIcon />)}
    </button>
  );
}
