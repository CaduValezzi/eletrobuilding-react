import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "outline-light";

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};
