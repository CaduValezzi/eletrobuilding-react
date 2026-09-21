import { faq } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FaqItem } from "@/components/molecules/FaqItem";
import { Button } from "@/components/atoms/Button";

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-graphite-950">
      <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow className="mb-5 block">Dúvidas Frequentes</Eyebrow>
          <SectionHeading className="mb-6">Responda antes de contratar</SectionHeading>
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted">
            Perguntas comuns de quem está avaliando contratar a Eletro Building.
          </p>
          <Button href="/contato" variant="ghost">
            Falar com a equipe
          </Button>
        </div>

        <div className="border-t border-line">
          {faq.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
