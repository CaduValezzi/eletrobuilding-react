import type { ButtonVariant } from "./Button.types";

export const BUTTON_BASE_CLASSES =
  "inline-flex items-center gap-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 border";

// Base sits on the constant bright amber background, so its text must stay
// fixed dark ink regardless of theme. Hover swaps to the page background,
// so it uses the theme-reactive tokens to stay coherent in both themes.
export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "border-volt bg-volt text-ink hover:bg-graphite-950 hover:text-foam",
  ghost: "border-line text-foam hover:border-volt hover:text-volt-dim",
  "outline-light": "border-white/50 text-white hover:border-volt hover:text-volt",
};
