import type { ChecklistItemProps } from "./ChecklistItem.types";

export function ChecklistItem({ children }: ChecklistItemProps) {
  return (
    <li className="flex items-start gap-3 border-b border-line py-4 text-sm leading-relaxed text-muted last:border-b-0">
      <span className="mt-0.5 text-volt-dim" aria-hidden>
        ▪
      </span>
      <span>{children}</span>
    </li>
  );
}
