import { services } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ServiceLinkCard } from "@/components/molecules/ServiceLinkCard";
import { Button } from "@/components/atoms/Button";

export function ServicesTeaser() {
  return (
    <section id="servicos" className="section-pad bg-graphite-900/40">
      <div className="container-edge">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-5 block">Nossos Serviços</Eyebrow>
            <SectionHeading className="max-w-xl">
              Engenharia entregue com responsabilidade
            </SectionHeading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Da vistoria à entrega, cada serviço é executado por uma equipe e documentado
            do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="bg-graphite-950">
              <ServiceLinkCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/servicos">Ver todos os serviços</Button>
          <Button href="/contato" variant="ghost">
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
