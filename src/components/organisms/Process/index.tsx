import { process } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ProcessStep } from "@/components/molecules/ProcessStep";

export function Process() {
  return (
    <section id="processo" className="section-pad bg-graphite-950">
      <div className="container-edge">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow className="mb-5 block">Como Trabalhamos</Eyebrow>
            <SectionHeading>
              Do diagnóstico à energização, sem etapa pulada
            </SectionHeading>
          </div>
          <p className="self-end text-sm leading-relaxed text-muted lg:text-base">
            Cada etapa é formalizada antes de avançar para a próxima — escopo definido, projeto
            aprovado, execução documentada.
          </p>
        </div>

        <div className="max-w-2xl">
          {process.map((step, index) => (
            <ProcessStep key={step.step} {...step} isLast={index === process.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
