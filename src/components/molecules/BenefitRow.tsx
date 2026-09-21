import { Numeral } from "@/components/atoms/Numeral";

type BenefitRowProps = {
  number: string;
  title: string;
  description: string;
};

export function BenefitRow({ number, title, description }: BenefitRowProps) {
  return (
    <div className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[80px_1fr_2fr] md:gap-8">
      <Numeral value={number} />
      <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-foam md:text-2xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
