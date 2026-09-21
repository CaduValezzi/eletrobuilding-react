import { Eyebrow } from "@/components/atoms/Eyebrow";
import type { InfoCardProps } from "./InfoCard.types";

export function InfoCard({ label, title, body, items }: InfoCardProps) {
  return (
    <div className="hairline border-l-2 border-l-volt bg-graphite-900/60 p-7">
      {label && <Eyebrow className="mb-3 block">{label}</Eyebrow>}
      <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-tight text-foam">
        {title}
      </h3>
      {body && <p className="text-sm leading-relaxed text-muted">{body}</p>}
      {items && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-0.5 text-volt-dim" aria-hidden>
                ▪
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
