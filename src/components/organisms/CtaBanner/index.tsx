import { ctaBanner } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Button } from "@/components/atoms/Button";

export function CtaBanner() {
  return (
    <section className="border-y border-line bg-graphite-900/60 py-20 md:py-24">
      <div className="container-edge flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <Eyebrow className="mb-5 block">{ctaBanner.eyebrow}</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.1] tracking-tight text-foam md:text-4xl">
            {ctaBanner.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {ctaBanner.description}
          </p>
        </div>
        <Button href={ctaBanner.cta.href} className="shrink-0">
          {ctaBanner.cta.label}
        </Button>
      </div>
    </section>
  );
}
