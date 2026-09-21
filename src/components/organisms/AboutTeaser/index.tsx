import { aboutTeaser } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Button } from "@/components/atoms/Button";
import { FactCard } from "@/components/molecules/FactCard";

export function AboutTeaser() {
  return (
    <section id="sobre" className="section-pad bg-graphite-950">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow className="mb-5 block">{aboutTeaser.eyebrow}</Eyebrow>
            <SectionHeading className="mb-6 max-w-xl">{aboutTeaser.title}</SectionHeading>
            <p className="max-w-xl text-base leading-relaxed text-muted">{aboutTeaser.body}</p>

            <div className="mt-8">
              <Button href={aboutTeaser.cta.href} variant="ghost">
                {aboutTeaser.cta.label}
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutTeaser.facts.map((fact) => (
                <FactCard key={fact.title} {...fact} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center border border-line bg-graphite-900/50 p-10">
            <div className="text-center">
              <p className="font-display text-7xl font-semibold text-volt-dim md:text-8xl">
                {aboutTeaser.metric.value}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-foam">
                {aboutTeaser.metric.label}
              </p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {aboutTeaser.metric.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
