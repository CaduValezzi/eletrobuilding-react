import { Eyebrow } from "@/components/atoms/Eyebrow";

type FactCardProps = {
  label: string;
  title: string;
  body: string;
};

export function FactCard({ label, title, body }: FactCardProps) {
  return (
    <div className="hairline border-l-2 border-l-volt bg-graphite-900/60 p-6">
      <Eyebrow className="mb-3 block">{label}</Eyebrow>
      <h3 className="mb-2 font-display text-xl font-semibold uppercase tracking-tight text-foam">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
