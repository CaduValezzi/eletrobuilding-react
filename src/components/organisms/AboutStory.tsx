import Image from "next/image";
import { aboutPage } from "@/lib/content";
import { InfoCard } from "@/components/molecules/InfoCard";

export function AboutStory() {
  return (
    <>
      <section className="section-pad bg-graphite-950 pt-0">
        <div className="container-edge">
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {aboutPage.intro}
          </p>
        </div>
      </section>

      <section className="bg-graphite-950">
        <div className="container-edge">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/transformer.webp"
              alt="Transformador de alta tensão em subestação de energia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-900/40">
        <div className="container-edge">
          <h2 className="mb-10 font-display text-3xl font-semibold uppercase tracking-tight text-foam md:text-4xl">
            Missão, visão e valores
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard label="01" title={aboutPage.mission.title} body={aboutPage.mission.body} />
            <InfoCard label="02" title={aboutPage.vision.title} body={aboutPage.vision.body} />
            <InfoCard label="03" title={aboutPage.values.title} items={aboutPage.values.items} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-950">
        <div className="container-edge">
          <h2 className="mb-10 font-display text-3xl font-semibold uppercase tracking-tight text-foam md:text-4xl">
            Segmentos atendidos
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {aboutPage.segments.map((segment) => (
              <div key={segment.title} className="bg-graphite-950 p-7">
                <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-tight text-foam">
                  {segment.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{segment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
