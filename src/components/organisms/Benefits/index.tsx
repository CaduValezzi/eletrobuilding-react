import { benefits } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { BenefitRow } from "@/components/molecules/BenefitRow";

export function Benefits() {
  return (
    <section id="diferenciais" className="section-pad bg-graphite-900/40">
      <div className="container-edge">
        <div className="mb-14 max-w-2xl">
          <Eyebrow className="mb-5 block">Por que a Eletro Building</Eyebrow>
          <SectionHeading>Feita para remover os pontos de falha comuns</SectionHeading>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            Estruturamos a empresa para eliminar os problemas mais comuns entre clientes e
            prestadores de serviço elétrico: escopo pouco claro, atraso e responsabilidade
            dividida entre projeto e execução.
          </p>
        </div>

        <div className="border-t border-line">
          {benefits.map((benefit) => (
            <BenefitRow key={benefit.number} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
