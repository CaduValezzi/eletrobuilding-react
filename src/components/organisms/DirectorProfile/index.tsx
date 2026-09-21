import { director } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";

export function DirectorProfile() {
  return (
    <section className="section-pad bg-graphite-900/40">
      <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow className="mb-5 block">{director.eyebrow}</Eyebrow>
          <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center border border-line bg-graphite-950">
            <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Foto do diretor
            </span>
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
            {director.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-volt-dim">
            {director.role}
          </p>
        </div>

        <div>
          <div className="space-y-5">
            {director.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-l-volt bg-graphite-950 p-5">
            <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-muted">
              {director.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
