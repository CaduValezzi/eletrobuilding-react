import Link from "next/link";
import type { ButtonProps } from "./Button.types";
import { BUTTON_BASE_CLASSES, BUTTON_VARIANT_CLASSES } from "./Button.styles";

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
